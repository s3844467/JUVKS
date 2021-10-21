FROM openjdk:8-jdk-alpine as build

WORKDIR /BackEnd/bookmicroservices

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

# COPY target/bookmicroservices-0.0.1.jar bookmicroservices.jar


EXPOSE 8081

# Run the Spring boot application
ENTRYPOINT ["java", "-jar", "/BackEnd/bookmicroservices/target/dependency/bookmicroservices-0.0.1.jar"]


# RUN mvn clean install
# CMD mvn spring-boot:run
