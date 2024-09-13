package com.HelloDog.Backend.service.impl;

import com.HelloDog.Backend.dto.DogInfoDto;
import com.HelloDog.Backend.exceptions.DogAPIException;
import com.HelloDog.Backend.models.DogInfoResponse;
import com.HelloDog.Backend.service.DogInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.Arrays;
import java.util.List;
//import org.springframework.web.client.RestTemplate;

@Service
public class DogInfoImpl implements DogInfoService {
//    private  final RestTemplate restTemplate;
//
//    @Autowired
//    public DogImageImpl(RestTemplate restTemplate) {
//        this.restTemplate = restTemplate;
//    }

    private final WebClient webClient;
    private final String HEADER_VALUE_API_KEY;
    private final String HEADER_VALUE_API_HOST;

    @Autowired
    public DogInfoImpl(WebClient webClient,
                       @Value("${X_RAPIDAPI_KEY}") String hValueKey,
                       @Value("${X_RAPIDAPI_HOST}") String hValueHost) {
        this.webClient = webClient;
        this.HEADER_VALUE_API_KEY = hValueKey;
        this.HEADER_VALUE_API_HOST = hValueHost;
    }

    private String getDogInfoURI(String breed){
        return String.format(DOG_INFO_URI, breed);
    }

    private DogInfoDto getDogInfoDto(String breed){
      //DogInfoResponse res = restTemplate.getForObject(this.getDogInfoURI(breed), DogInfoResponse.class);
        DogInfoResponse[] res = webClient.get().uri(this.getDogInfoURI(breed))
                .header(HEADER_NAME_API_KEY, HEADER_VALUE_API_KEY)
                .header(HEADER_NAME_API_HOST, HEADER_VALUE_API_HOST)
                .retrieve()
                .onStatus(HttpStatusCode::isError, clientResponse -> {
                    throw new DogAPIException(clientResponse.statusCode());
                })
                .bodyToMono(DogInfoResponse[].class).block();
        if(res == null) throw new DogAPIException(HttpStatus.NOT_FOUND, "Response from Dog Info API is null");
        List<DogInfoResponse> resList = Arrays.stream(res).toList();
        if(resList.isEmpty()) throw new DogAPIException(HttpStatus.NOT_FOUND, "Dog Info not found");
        return mapToDto(resList.getFirst());
    }

    @Override
    public ResponseEntity<DogInfoDto> getDogInfo(String breed) {
        return ResponseEntity.ok(this.getDogInfoDto(breed));
    }

    private DogInfoDto mapToDto(DogInfoResponse dogInfoItem){
        DogInfoDto dogInfoDto = new DogInfoDto();
        dogInfoDto.setName(dogInfoItem.getName());
        dogInfoDto.setImg(dogInfoItem.getImage_link());
        dogInfoDto.setGoodWithChildren(dogInfoItem.getGood_with_children());
        dogInfoDto.setGoodWithOtherDogs(dogInfoItem.getGood_with_other_dogs());
        dogInfoDto.setGoodWithStrangers(dogInfoItem.getGood_with_strangers());
        dogInfoDto.setShedding(dogInfoItem.getShedding());
        dogInfoDto.setGrooming(dogInfoItem.getGrooming());
        dogInfoDto.setDrooling(dogInfoItem.getDrooling());
        dogInfoDto.setCoatLength(dogInfoItem.getCoat_length());
        dogInfoDto.setPlayfulness(dogInfoItem.getPlayfulness());
        dogInfoDto.setProtectiveness(dogInfoItem.getProtectiveness());
        dogInfoDto.setTrainability(dogInfoItem.getTrainability());
        dogInfoDto.setEnergy(dogInfoItem.getEnergy());
        dogInfoDto.setBarking(dogInfoItem.getBarking());
        dogInfoDto.setMaxLifeExpectancy(dogInfoItem.getMax_life_expectancy());
        dogInfoDto.setMinLifeExpectancy(dogInfoItem.getMin_life_expectancy());
        dogInfoDto.setMaxHeightMale(dogInfoItem.getMax_height_male());
        dogInfoDto.setMinHeightMale(dogInfoItem.getMin_height_male());
        dogInfoDto.setMaxHeightFemale(dogInfoItem.getMax_height_female());
        dogInfoDto.setMinHeightFemale(dogInfoItem.getMin_height_female());
        dogInfoDto.setMaxWeightMale(dogInfoItem.getMax_weight_male());
        dogInfoDto.setMinWeightMale(dogInfoItem.getMin_weight_male());
        dogInfoDto.setMaxWeightFemale(dogInfoItem.getMax_weight_female());
        dogInfoDto.setMinWeightFemale(dogInfoItem.getMin_weight_female());
        return dogInfoDto;
    }
}
