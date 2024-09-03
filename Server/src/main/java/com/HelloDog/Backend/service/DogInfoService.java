package com.HelloDog.Backend.service;

import com.HelloDog.Backend.dto.DogInfoDto;
import org.springframework.http.ResponseEntity;

public interface DogInfoService {
    String DOG_INFO_URI = "https://dogs-by-api-ninjas.p.rapidapi.com/v1/dogs?name=%s";
    String HEADER_NAME_API_KEY = "X-RapidAPI-Key";
    String HEADER_NAME_API_HOST = "X-RapidAPI-Host";
    ResponseEntity<DogInfoDto> getDogInfo(String breed);
}
