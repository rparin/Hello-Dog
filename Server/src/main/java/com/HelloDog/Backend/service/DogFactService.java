package com.HelloDog.Backend.service;

import com.HelloDog.Backend.dto.DogFactDto;
import org.springframework.http.ResponseEntity;

public interface DogFactService {
    String DOG_FACT_URL = "https://dogapi.dog/api/v2/facts";
    int DOG_FACT_MAX_LEN = 60;
    int DOG_FACT_MAX_ATTEMPTS = 5;
    ResponseEntity<DogFactDto> getDogFact();
    ResponseEntity<DogFactDto> getDogFact(int len);
}
