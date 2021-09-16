package com.rmit.sept.bk_bookservices.exceptions;

public class IsbnAlreadyExistsResponse {
    private String message;

    public IsbnAlreadyExistsResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
