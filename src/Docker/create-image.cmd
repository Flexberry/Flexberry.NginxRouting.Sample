docker build --no-cache -f Dockerfiles/Dockerfile.PostgreSql -t nginxsample/postgre-sql SQL

docker build --no-cache -f Dockerfiles/Dockerfile.ClickhouseAudit -t nginxsample/audit-clickhouse SQL

docker build --no-cache -f Dockerfiles/Dockerfile.App -t nginxsample/app ..

docker build --no-cache -f Dockerfiles/Dockerfile.BackendForReadAudit -t nginxsample/auditodatabackend ..