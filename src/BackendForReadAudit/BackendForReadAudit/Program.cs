using ICSSoft.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using Unity;
using Unity.Microsoft.DependencyInjection;

namespace BackendForReadPostgresDatabase
{
    public class Program
    {
        private static readonly IUnityContainer Container = UnityFactory.GetContainer();

        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .UseUnityServiceProvider(Container)
                .ConfigureHostConfiguration(builder => { builder.AddEnvironmentVariables("DOTNET_ENVIRONMENT"); })
                .ConfigureAppConfiguration(config =>
                {
                    var environmentVariable = Environment.GetEnvironmentVariable("DOTNET_ENVIRONMENT");

                    switch (environmentVariable)
                    {
                        case "DockerAuditClickhouse":
                            config.AddJsonFile("appsettings.DockerAuditClickhouse.json", optional: false);
                            break;

                        case "DockerAuditPostgres":
                            config.AddJsonFile("appsettings.DockerAuditPostgres.json", optional: false);
                            break;

                        default:
                            config.AddJsonFile("appsettings.json", optional: false);
                            break;
                    }
                })
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
