package com.HelloDog.Backend.service.impl.dogFact;

import com.HelloDog.Backend.dto.DogFactDto;
import com.HelloDog.Backend.models.DogFactResponse;
import com.HelloDog.Backend.service.DogFactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class DogFactRestTemplateImpl implements DogFactService {

    private  final RestTemplate restTemplate;

    @Autowired
    public DogFactRestTemplateImpl(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @Override
    public ResponseEntity<DogFactDto> getDogFact() {
        DogFactResponse res = restTemplate.getForObject(DOG_FACT_URL, DogFactResponse.class);
        DogFactDto dogFactdto = new DogFactDto(res.getData().getFirst().getAttributes().getBody());
        return ResponseEntity.ok(dogFactdto);
    }

    @Override
    public ResponseEntity<DogFactDto> getDogFact(int len) {
        if(len <= DOG_FACT_MAX_LEN){
            return ResponseEntity.ok(new DogFactDto(null));
        }

        //x Attempts to get a dog fact within max length
        for(int i = 0; i < DOG_FACT_MAX_ATTEMPTS; i++) {
            ResponseEntity<DogFactDto> dogFactDto = this.getDogFact();
            if(dogFactDto.getBody().getDogFact().length() <= len){
                return dogFactDto;
            }
        }

        return ResponseEntity.ok(new DogFactDto(null));
    }
}
