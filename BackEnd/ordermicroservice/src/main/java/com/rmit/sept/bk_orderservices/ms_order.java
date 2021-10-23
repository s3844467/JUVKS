package com.rmit.sept.bk_orderservices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class ms_order {

    public static void main(String[] args) {
        SpringApplication.run(ms_order.class, args);
    }
}
