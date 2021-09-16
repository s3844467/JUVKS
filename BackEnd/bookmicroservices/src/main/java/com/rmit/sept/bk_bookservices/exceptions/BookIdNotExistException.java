package com.rmit.sept.bk_bookservices.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class BookIdNotExistException extends RuntimeException {

	public BookIdNotExistException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}

}
