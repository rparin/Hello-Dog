package com.HelloDog.Backend.service.impl;

import com.HelloDog.Backend.dto.DogFactDto;
import com.HelloDog.Backend.models.DogFactResponse;
import com.HelloDog.Backend.service.DogFactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
//import org.springframework.web.client.RestTemplate;

@Service
public class DogFactImpl implements DogFactService {
//    private  final RestTemplate restTemplate;

//    @Autowired
//    public DogFactImpl(RestTemplate restTemplate) {
//        this.restTemplate = restTemplate;
//    }

    private final WebClient webClient;

    @Autowired
    public DogFactImpl(WebClient webClient) {
        this.webClient = webClient;
    }

    private DogFactDto getDogFactDto(){
        //DogFactResponse res = restTemplate.getForObject(DOG_FACT_URL, DogFactResponse.class);
        DogFactResponse res = webClient.get().uri(DOG_FACT_URI).retrieve().bodyToMono(DogFactResponse.class).block();
        return new DogFactDto(res.getData().getFirst().getAttributes().getBody());
    }

    @Override
    public ResponseEntity<DogFactDto> getDogFact() {
        return ResponseEntity.ok(this.getDogFactDto());
    }

    @Override
    public ResponseEntity<DogFactDto> getDogFact(int len) {
        if(len <= DOG_FACT_MAX_LEN){
            return ResponseEntity.ok(new DogFactDto(null));
        }

        //x Attempts to get a dog fact within max length
        for(int i = 0; i < DOG_FACT_MAX_ATTEMPTS; i++) {
            DogFactDto dogFactDto = this.getDogFactDto();
            if(dogFactDto.getDogFact().length() <= len){
                return ResponseEntity.ok(dogFactDto);
            }
        }
        return ResponseEntity.ok(new DogFactDto(null));
    }
}