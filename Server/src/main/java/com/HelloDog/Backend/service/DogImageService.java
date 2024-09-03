package com.HelloDog.Backend.service;

import com.HelloDog.Backend.dto.DogImagesDto;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public interface DogImageService {
    String DOG_IMAGE_URI = "https://dog.ceo/api/breed/%s/images";
    ResponseEntity<DogImagesDto> getDogImgs(String breed);
}
