DOCKER_COMPOSE_FILE := ./docker/docker-compose.yml

ps:
	docker-compose -f ${DOCKER_COMPOSE_FILE} ps

up:
	docker-compose -f ${DOCKER_COMPOSE_FILE} up -d --remove-orphans

up-build:
	docker-compose -f ${DOCKER_COMPOSE_FILE} up --build -d --remove-orphans

down:
	docker-compose -f ${DOCKER_COMPOSE_FILE} down --remove-orphans

build:
	docker-compose -f ${DOCKER_COMPOSE_FILE} build

bash:
	docker-compose -f ${DOCKER_COMPOSE_FILE} run --rm node bash

logs:
	docker-compose -f ${DOCKER_COMPOSE_FILE} logs -f node

cc: # 👇️ clean npm cache
	docker-compose -f ${DOCKER_COMPOSE_FILE} run --rm node bash -c "npm cache clean --force"
