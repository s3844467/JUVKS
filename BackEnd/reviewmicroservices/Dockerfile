FROM openjdk:8-jdk-alpine as build

WORKDIR /BackEnd/reviewmicroservices

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .

RUN chmod +x ./mvnw
# download the dependency if needed or if the pom file is changed
RUN dos2unix mvnw

RUN ./mvnw dependency:go-offline -B
COPY src src


RUN ./mvnw package -DskipTests
RUN mkdir -p target/dependency && (cd target/dependency; jar -xf ../*.jar)

# COPY target/reviewmicroservices-0.0.1.jar reviewmicroservices.jar


EXPOSE 8082

# Run the Spring boot application
ENTRYPOINT ["java", "-jar", "/BackEnd/reviewmicroservices/target/dependency/reviewmicroservices-0.0.1.jar"]


# RUN mvn clean install
# CMD mvn spring-boot:run
