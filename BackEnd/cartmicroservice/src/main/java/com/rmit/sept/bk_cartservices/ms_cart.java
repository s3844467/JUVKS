package com.rmit.sept.bk_cartservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ms_cart {

    public static void main(String[] args) {
        SpringApplication.run(ms_cart.class, args);
    }
}
