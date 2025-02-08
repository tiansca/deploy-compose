wget -N https://file-1255740208.cos.ap-beijing.myqcloud.com/deploy-frontend.tar
wget -N https://file-1255740208.cos.ap-beijing.myqcloud.com/deploy-backend.tar
docker load -i deploy-frontend.tar
docker load -i deploy-backend.tar
docker compose up -d
