#!/bin/sh

echo "stopping containers"
docker compose down

echo "pulling latest changes"
git pull

echo "starting containers"
docker compose up -d
