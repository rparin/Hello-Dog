package com.HelloDog.Backend.exceptions;

import lombok.Getter;
import org.springframework.http.HttpStatusCode;

@Getter
public class DogAPIException extends RuntimeException {
    private final HttpStatusCode httpStatus;

    public DogAPIException(HttpStatusCode httpStatus) {
        super(httpStatus.toString());
        this.httpStatus = httpStatus;
    }

    public DogAPIException(HttpStatusCode httpStatus, String message) {
        super(message);
        this.httpStatus = httpStatus;
    }
}
