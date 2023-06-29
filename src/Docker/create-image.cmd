docker build --no-cache -f Dockerfile/Dockerfile.App -t nginxsample/app ..

docker build --no-cache -f Dockerfile/Dockerfile.PostgreSql -t nginxsample/postgre-sql SQL

docker build --no-cache -f Dockerfile/Dockerfile.ClickhouseAudit -t nginxsample/audit-clickhouse SQL