package com.HelloDog.Backend.controllers;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.HelloDog.Backend.controller.DogController;
import com.HelloDog.Backend.dto.DogFactDto;
import com.HelloDog.Backend.dto.DogImagesDto;
import com.HelloDog.Backend.dto.DogInfoDto;
import com.HelloDog.Backend.exceptions.DogAPIException;
import com.HelloDog.Backend.service.DogFactService;
import com.HelloDog.Backend.service.DogImageService;
import com.HelloDog.Backend.service.DogInfoService;
import org.hamcrest.CoreMatchers;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;


import java.util.ArrayList;

@WebMvcTest(controllers = DogController.class)
@ExtendWith(MockitoExtension.class)
class DogControllerTest {

    //Endpoints
    private static final String DOG_FACT_ENDPOINT = "/api/dogfact";
    private static final String DOG_INFO_ENDPOINT = "/api/dogInfo/%s";
    private static final String DOG_IMGS_ENDPOINT = "/api/dogImage/%s";

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DogFactService dogFactService;

    @MockBean
    private DogImageService dogImageService;

    @MockBean
    private DogInfoService dogInfoService;

    @Autowired
    private DogFactDto dogFactDto;
    private DogImagesDto dogImagesDto;
    private DogInfoDto dogInfoDto;

    @BeforeEach
    public void init() {
        dogInfoDto = DogInfoDto.builder().name("Cardigan Welsh Corgi").img("https://api-ninjas.com/images/dogs/cardigan_welsh_corgi.jpg")
                .goodWithChildren(4).goodWithOtherDogs(3).goodWithStrangers(4).shedding(3).grooming(2).drooling(1).coatLength(1)
                .playfulness(4).protectiveness(3).trainability(4).energy(4).barking(5).minLifeExpectancy(12).maxLifeExpectancy(15)
                .maxHeightMale(12).minHeightMale(10).maxHeightFemale(12).minHeightFemale(10).maxWeightMale(38).minWeightMale(30)
                .minWeightFemale(34).maxWeightFemale(25)
                .build();
        dogImagesDto = DogImagesDto.builder().imgs(new ArrayList<String>()).len(139).build();
        dogFactDto = DogFactDto.builder().dogFact("Dogs sweat through the pads of their feet.").build();
    }

    @Test
    void GetDogInfo_ReturnDogInfoDto() throws Exception {

        //Return dogInfoDto response when service called from get api call
        final String DOG_BREED = "corgi";
        when(dogInfoService.getDogInfo(DOG_BREED)).thenReturn(ResponseEntity.ok(dogInfoDto));

        //Mock the get api call
        ResultActions response = mockMvc.perform(
                get(String.format(DOG_INFO_ENDPOINT,DOG_BREED))
                        .contentType(MediaType.APPLICATION_JSON));

        //Check if the response matches the given dto
        response.andExpectAll(
                status().isOk(),
                jsonPath("$.name", CoreMatchers.is(dogInfoDto.getName())),
                jsonPath("$.img", CoreMatchers.is(dogInfoDto.getImg())),
                jsonPath("$.goodWithChildren", CoreMatchers.is(dogInfoDto.getGoodWithChildren())),
                jsonPath("$.goodWithOtherDogs", CoreMatchers.is(dogInfoDto.getGoodWithOtherDogs())),
                jsonPath("$.goodWithStrangers", CoreMatchers.is(dogInfoDto.getGoodWithStrangers())),
                jsonPath("$.shedding", CoreMatchers.is(dogInfoDto.getShedding())),
                jsonPath("$.grooming", CoreMatchers.is(dogInfoDto.getGrooming())),
                jsonPath("$.drooling", CoreMatchers.is(dogInfoDto.getDrooling())),
                jsonPath("$.coatLength", CoreMatchers.is(dogInfoDto.getCoatLength())),
                jsonPath("$.playfulness", CoreMatchers.is(dogInfoDto.getPlayfulness())),
                jsonPath("$.protectiveness", CoreMatchers.is(dogInfoDto.getProtectiveness())),
                jsonPath("$.trainability", CoreMatchers.is(dogInfoDto.getTrainability())),
                jsonPath("$.energy", CoreMatchers.is(dogInfoDto.getEnergy())),
                jsonPath("$.barking", CoreMatchers.is(dogInfoDto.getBarking())),
                jsonPath("$.minLifeExpectancy", CoreMatchers.is(dogInfoDto.getMinLifeExpectancy())),
                jsonPath("$.maxLifeExpectancy", CoreMatchers.is(dogInfoDto.getMaxLifeExpectancy())),
                jsonPath("$.maxHeightMale", CoreMatchers.is(dogInfoDto.getMaxHeightMale())),
                jsonPath("$.minHeightMale", CoreMatchers.is(dogInfoDto.getMinHeightMale())),
                jsonPath("$.maxHeightFemale", CoreMatchers.is(dogInfoDto.getMaxHeightFemale())),
                jsonPath("$.minHeightFemale", CoreMatchers.is(dogInfoDto.getMinHeightFemale())),
                jsonPath("$.maxWeightMale", CoreMatchers.is(dogInfoDto.getMaxWeightMale())),
                jsonPath("$.minWeightMale", CoreMatchers.is(dogInfoDto.getMinWeightMale())),
                jsonPath("$.minWeightFemale", CoreMatchers.is(dogInfoDto.getMinWeightFemale())),
                jsonPath("$.maxWeightFemale", CoreMatchers.is(dogInfoDto.getMaxWeightFemale()))
        );
    }

    @Test
    void GetDogFact_ReturnDogFactDto() throws Exception {
        //Return dogFactDto response when service called from get api call
        final int LEN = 120;
        when(dogFactService.getDogFact(LEN)).thenReturn(ResponseEntity.ok(dogFactDto));

        //Mock the get api call
        ResultActions response = mockMvc.perform(
                get(DOG_FACT_ENDPOINT)
                        .param("max_length", Integer.toString(LEN))
                        .contentType(MediaType.APPLICATION_JSON));

        //Check if the response matches the given dto
        response.andExpectAll(
                status().isOk(),
                jsonPath("$.dogFact").isString()
        );
    }

    @Test
    void GetDogImgs_ReturnDogImgsDto() throws Exception {
        //Return dogImagesDto response when service called from get api call
        final String DOG_BREED = "corgi";
        when(dogImageService.getDogImgs(DOG_BREED)).thenReturn(ResponseEntity.ok(dogImagesDto));

        //Mock the get api call
        ResultActions response = mockMvc.perform(
                get(String.format(DOG_IMGS_ENDPOINT,DOG_BREED))
                        .contentType(MediaType.APPLICATION_JSON));

        //Check if the response matches the given dto
        response.andExpectAll(
                status().isOk(),
                jsonPath("$.imgs").isArray(),
                jsonPath("$.len").isNumber()
        );
    }

    @Test
    void GetDogFact_ReturnNotFound() throws Exception {
        final int LEN = 0;
        final String EX_MSG = "Dog fact not found";

        //Throw exception for invalid len
        when(dogFactService.getDogFact(LEN)).thenThrow(new DogAPIException(HttpStatus.NOT_FOUND, EX_MSG));

        //Mock the get api call
        ResultActions response = mockMvc.perform(
                get(DOG_FACT_ENDPOINT)
                        .param("max_length", Integer.toString(LEN))
                        .contentType(MediaType.APPLICATION_JSON));

        //Check if the response matches the error json
        response.andExpectAll(
                status().isNotFound(),
                jsonPath("$.message", CoreMatchers.is(EX_MSG)),
                jsonPath("$.timestamp").isString()
        );
    }

    @Test
    void GetDogInfo_ReturnNotFound() throws Exception {
        final String DOG_BREED = "invalidDogBreed";
        final String EX_MSG = "Dog Info not found";

        //Return dogImagesDto response when service called from get api call
        when(dogInfoService.getDogInfo(DOG_BREED)).thenThrow(new DogAPIException(HttpStatus.NOT_FOUND, EX_MSG));

        //Mock the get api call
        ResultActions response = mockMvc.perform(
                get(String.format(DOG_INFO_ENDPOINT,DOG_BREED))
                        .contentType(MediaType.APPLICATION_JSON));

        //Check if the response matches the error json
        response.andExpectAll(
                status().isNotFound(),
                jsonPath("$.message", CoreMatchers.is(EX_MSG)),
                jsonPath("$.timestamp").isString()
        );
    }

    @Test
    void GetDogImgs_ReturnNotFound() throws Exception {
        final String DOG_BREED = "invalidDogBreed";
        final String EX_MSG = "Error Fetching Dog Images";

        //Throw exception for non-existent dog breeds
        when(dogImageService.getDogImgs(DOG_BREED)).thenThrow(new DogAPIException(HttpStatus.NOT_FOUND, EX_MSG));

        //Mock the get api call
        ResultActions response = mockMvc.perform(
                get(String.format(DOG_IMGS_ENDPOINT,DOG_BREED))
                        .contentType(MediaType.APPLICATION_JSON));

        //Check if the response matches the error json
        response.andExpectAll(
                status().isNotFound(),
                jsonPath("$.message", CoreMatchers.is(EX_MSG)),
                jsonPath("$.timestamp").isString()
        );
    }

}