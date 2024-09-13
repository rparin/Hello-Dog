package com.HelloDog.Backend.service.impl;

import com.HelloDog.Backend.dto.DogImagesDto;
import com.HelloDog.Backend.exceptions.DogAPIException;
import com.HelloDog.Backend.models.DogImageResponse;
import com.HelloDog.Backend.service.DogImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
//import org.springframework.web.client.RestTemplate;

@Service
public class DogImageImpl implements DogImageService {
//    private  final RestTemplate restTemplate;
//
//    @Autowired
//    public DogImageImpl(RestTemplate restTemplate) {
//        this.restTemplate = restTemplate;
//    }+

    private final WebClient webClient;

    @Autowired
    public DogImageImpl(WebClient webClient) {
        this.webClient = webClient;
    }

    private String getDogImageURI(String breed){
        return String.format(DOG_IMAGE_URI, breed);
    }

    private DogImagesDto getDogImageDto(String breed){
        //DogImageResponse res = restTemplate.getForObject(this.getDogImageURI(breed), DogImageResponse.class);
        DogImageResponse res = webClient.get().uri(this.getDogImageURI(breed)).retrieve()
                .onStatus(HttpStatusCode::isError, clientResponse -> {
                    throw new DogAPIException(clientResponse.statusCode(), "Dog Images Not found");
                })
                .bodyToMono(DogImageResponse.class).block();
        if(res == null) throw new DogAPIException(HttpStatus.NOT_FOUND, "Response from Dog Images API is null");
        return new DogImagesDto(res.getMessage(), res.getMessage().size());
    }

    @Override
    public ResponseEntity<DogImagesDto> getDogImgs(String breed){
        return ResponseEntity.ok(this.getDogImageDto(breed));
    }
}
