FROM openjdk:8-jdk-alpine as build

WORKDIR /BackEnd/loginmicroservices



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

COPY target/loginmicroservices-0.0.1.jar loginmicroservices.jar
# RUN mv target/dependency/loginmicroservices-0.0.1.jar loginmicroservices.jar


EXPOSE 8080

# Run the Spring boot application
ENTRYPOINT ["java", "-jar", "/BackEnd/loginmicroservices/loginmicroservices.jar"]


# RUN mvn clean install
# CMD mvn spring-boot:run
