package com.HelloDog.Backend.exceptions;


import com.HelloDog.Backend.controller.DogController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice(assignableTypes = DogController.class)
public class DogAPIHandler {

    @ExceptionHandler(DogAPIException.class)
    private ResponseEntity<ErrorObject> handleDogAPIException(DogAPIException ex, WebRequest request) {
        ErrorObject errorObject = new ErrorObject();
        errorObject.setStatusCode(ex.getHttpStatus().value());
        errorObject.setMessage(String.format("%s", ex.getMessage()));
        errorObject.setTimestamp(new Date());
        return new ResponseEntity<>(errorObject, ex.getHttpStatus());
    }

}
