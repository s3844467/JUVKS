package com.rmit.sept.bk_reviewservices.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class IsbnUserAlreadyExistsException extends RuntimeException {

    public IsbnUserAlreadyExistsException(String message) {
        super(message);
    }
}
