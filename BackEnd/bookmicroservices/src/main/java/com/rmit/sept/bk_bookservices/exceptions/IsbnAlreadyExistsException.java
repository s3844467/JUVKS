package com.rmit.sept.bk_bookservices.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class IsbnAlreadyExistsException extends RuntimeException {

    public IsbnAlreadyExistsException(String message) {
        super(message);
    }
}
