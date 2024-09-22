# https://snyk.io/blog/best-practices-to-build-java-containers-with-docker/

FROM maven:3.9.9-ibm-semeru-21-jammy@sha256:cf9b8433c852a3788ab72397309a0e1a495d25c009392e7d7e5ecc01fe49ebba AS build
ARG BUILD_DIR=/project-build
RUN mkdir ${BUILD_DIR}
COPY . ${BUILD_DIR}
WORKDIR ${BUILD_DIR}
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine@sha256:31c3cc1b2b02ae43a3af8a34b0d4a20208818355b68f3112933f9e8fa5be9a3b
EXPOSE 8080
ARG BUILD_DIR=/project-build
ARG APP_DIR=/app-hellodog-backend-springboot
ARG USER_NAME=javauser
RUN mkdir ${APP_DIR}
RUN addgroup --system ${USER_NAME} && adduser -S -s /bin/false -G ${USER_NAME} ${USER_NAME}
COPY --from=build ${BUILD_DIR}/target/*.jar ${APP_DIR}/app.jar
WORKDIR ${APP_DIR}
RUN chown -R ${USER_NAME}:${USER_NAME} ${APP_DIR}
USER ${USER_NAME}
CMD ["java","-jar","app.jar"]