FROM openjdk:8-jdk-alpine as build

WORKDIR /BackEnd/cartmicroservices

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

# COPY target/cartmicroservices-0.0.1.jar cartmicroservices.jar


EXPOSE 8083

# Run the Spring boot application
ENTRYPOINT ["java", "-jar", "/BackEnd/cartmicroservices/target/dependency/cartmicroservices-0.0.1.jar"]


# RUN mvn clean install
# CMD mvn spring-boot:run
