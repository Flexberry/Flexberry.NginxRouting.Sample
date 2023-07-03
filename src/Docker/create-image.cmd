docker build -f Dockerfiles/Dockerfile.PostgreSql -t nginxsample/postgre-sql SQL

docker build -f Dockerfiles/Dockerfile.ClickhouseAudit -t nginxsample/audit-clickhouse SQL

docker build -f Dockerfiles/Dockerfile.App -t nginxsample/app ..

docker build -f Dockerfiles/Dockerfile.BackendForReadAudit -t nginxsample/auditodatabackend ..

docker build -f Dockerfiles/Dockerfile.Nginx -t nginxsample/nginx Nginx