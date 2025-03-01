DOCKER_COMPOSE_FILE := ./docker/docker-compose.yml

ps:
	docker compose -f ${DOCKER_COMPOSE_FILE} ps

up:
	docker compose -f ${DOCKER_COMPOSE_FILE} up -d --remove-orphans

up-watch:
	docker compose -f ${DOCKER_COMPOSE_FILE} up --remove-orphans

up-build:
	docker compose -f ${DOCKER_COMPOSE_FILE} up --build -d --remove-orphans

down:
	docker compose -f ${DOCKER_COMPOSE_FILE} down --remove-orphans

pull:
	docker compose -f ${DOCKER_COMPOSE_FILE} pull

build:
	docker compose -f ${DOCKER_COMPOSE_FILE} build --no-cache --progress=plain

bash:
	docker compose -f ${DOCKER_COMPOSE_FILE} run --rm node bash

logs:
	docker compose -f ${DOCKER_COMPOSE_FILE} logs -f node

cc: # 👇️ clean npm cache
	docker compose -f ${DOCKER_COMPOSE_FILE} run --rm node bash -c "npm cache clean --force"

build-image:
	cd ./docker/node
	docker build -t idocker2494/esseelitegroup-admin ../../ -f Dockerfile
	# docker build -t idocker2494/esseelitegroup-admin ../../ -f Dockerfile.dev

push-image:
	docker push idocker2494/esseelitegroup-admin
