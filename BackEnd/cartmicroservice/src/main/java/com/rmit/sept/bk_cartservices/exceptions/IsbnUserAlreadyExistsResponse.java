package com.rmit.sept.bk_cartservices.exceptions;

public class IsbnUserAlreadyExistsResponse {
    private String message;

    public IsbnUserAlreadyExistsResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
