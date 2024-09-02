package com.HelloDog.Backend.service.impl.dogFact;

import com.HelloDog.Backend.dto.DogFactDto;
import com.HelloDog.Backend.models.DogFactResponse;
import com.HelloDog.Backend.service.DogFactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
@Primary
public class DogFactWebClientImpl implements DogFactService {
    private final WebClient webClient;

    @Autowired
    public DogFactWebClientImpl(WebClient webClient) {
        this.webClient = webClient;
    }

    private DogFactDto getDogFactDto(){
        DogFactResponse res = webClient.get().uri(DOG_FACT_URL).retrieve().bodyToMono(DogFactResponse.class).block();
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
