namespace BackendForReadPostgresDatabase
{
    using ICSSoft.Services;
    using ICSSoft.STORMNET;
    using ICSSoft.STORMNET.Business;
    using ICSSoft.STORMNET.Security;
    using Microsoft.AspNet.OData.Extensions;
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Hosting;
    using Microsoft.AspNetCore.Http;
    using Microsoft.AspNetCore.HttpOverrides;
    using Microsoft.Extensions.Configuration;
    using Microsoft.Extensions.DependencyInjection;
    using NewPlatform.Flexberry.AuditBigData;
    using NewPlatform.Flexberry.ORM;
    using NewPlatform.Flexberry.ORM.ODataService.Extensions;
    using NewPlatform.Flexberry.ORM.ODataService.Files;
    using NewPlatform.Flexberry.ORM.ODataService.Model;
    using NewPlatform.Flexberry.ORM.ODataServiceCore.Common.Exceptions;
    using System;
    using Unity;

    /// <summary>
    /// Класс настройки запуска приложения.
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Startup" /> class.
        /// </summary>
        /// <param name="environment"></param>
        /// <param name="configuration">An application configuration properties.</param>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        /// <summary>
        /// An application configuration properties.
        /// </summary>
        public IConfiguration Configuration { get; }

        /// <summary>
        /// Configurate application services.
        /// </summary>
        /// <remarks>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// </remarks>
        /// <param name="services">An collection of application services.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvcCore(
                    options =>
                    {
                        options.Filters.Add<CustomExceptionFilter>();
                        options.EnableEndpointRouting = false;
                    })
                .AddFormatterMappings();

            services.AddOData();

            services.AddControllers().AddControllersAsServices();

            services.AddCors();
            services
                .AddHealthChecks()
                .AddNpgSql(Configuration["AuditConnString"]);
        }

        /// <summary>
        /// Configurate application container.
        /// </summary>
        /// <param name="container">Container to configure.</param>
        public void ConfigureContainer(IUnityContainer container)
        {
            container.RegisterInstance(Configuration);

            // Регистрируем базовые служебные реализации.
            container.RegisterType<IConfigResolver, ConfigResolver>(TypeLifetime.Singleton);
            container.RegisterType<IHttpContextAccessor, HttpContextAccessor>();

            ISecurityManager emptySecurityManager = new EmptySecurityManager();

            // Регистрируем основной DataService.
            string auditConnectionString = Configuration.GetConnectionString("AuditConnString");
            var environmentVariable = Environment.GetEnvironmentVariable("DOTNET_ENVIRONMENT");

            if (environmentVariable == "DockerAuditClickhouse")
            {
                container.RegisterInstance<ISecurityManager>(emptySecurityManager, InstanceLifetime.Singleton);

                IDataService auditDataServiceClickhouse = new ClickHouseDataService()
                {
                    CustomizationString = auditConnectionString
                };
                container.RegisterInstance<IDataService>(auditDataServiceClickhouse, InstanceLifetime.Singleton);
            }
            else
            {
                IDataService auditDataServicePostgres = new PostgresDataService(emptySecurityManager)
                {
                    CustomizationString = auditConnectionString
                };
                container.RegisterInstance<IDataService>(auditDataServicePostgres, InstanceLifetime.Singleton);
            }

            // Регистрируем FileAccessor.
            IDataObjectFileAccessor disabledDataObjectFileAccessor = new DisabledDataObjectFileAccessor();

            container.RegisterInstance<IDataObjectFileAccessor>(disabledDataObjectFileAccessor);
        }

        /// <summary>
        /// Configurate the HTTP request pipeline.
        /// </summary>
        /// <remarks>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </remarks>
        /// <param name="app">An application configurator.</param>
        /// <param name="env">Information about web hosting environment.</param>
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            LogService.LogInfo("Инициирован запуск приложения.");

            app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod());

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHealthChecks("/health");
            });

            app.UseODataService(builder =>
            {
                var assemblies = new[]
                {
                    typeof(UserSetting).Assembly,
                    typeof(AuditRecord).Assembly,
                };
                var modelBuilder = new DefaultDataObjectEdmModelBuilder(assemblies, true);

                builder.MapDataObjectRoute(modelBuilder);
            });
        }
    }
}
