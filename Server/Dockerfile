# https://snyk.io/blog/best-practices-to-build-java-containers-with-docker/

FROM maven:3.9.9-ibm-semeru-21-jammy@sha256:cf9b8433c852a3788ab72397309a0e1a495d25c009392e7d7e5ecc01fe49ebba AS build
RUN mkdir /project
COPY . /project
WORKDIR /project
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine@sha256:31c3cc1b2b02ae43a3af8a34b0d4a20208818355b68f3112933f9e8fa5be9a3b
EXPOSE 8080
ARG APP_DIR=/app-hellodog-backend-springboot
RUN mkdir ${APP_DIR}
RUN addgroup --system javauser && adduser -S -s /bin/false -G javauser javauser
COPY --from=build project/target/*.jar ${APP_DIR}/app.jar
WORKDIR ${APP_DIR}
RUN chown -R javauser:javauser ${APP_DIR}
USER javauser
CMD ["java","-jar","app.jar"]