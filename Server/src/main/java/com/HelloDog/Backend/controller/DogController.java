package com.HelloDog.Backend.controller;

import com.HelloDog.Backend.dto.DogFactDto;
import com.HelloDog.Backend.dto.DogImagesDto;
import com.HelloDog.Backend.dto.DogInfoDto;

import com.HelloDog.Backend.service.DogFactService;
import com.HelloDog.Backend.service.DogImageService;
import com.HelloDog.Backend.service.DogInfoService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

@RestController
@RequestMapping("/api")
public class DogController {
    private final DogFactService dogFactService;
    private final DogImageService dogImageService;
    private final DogInfoService dogInfoService;
    private static final Logger log = LoggerFactory.getLogger(DogController.class);

    @Autowired
    public DogController(DogFactService dogFactService, DogImageService dogImageService, DogInfoService dogInfoService) {
        this.dogFactService = dogFactService;
        this.dogImageService = dogImageService;
        this.dogInfoService = dogInfoService;
    }

    @GetMapping("/dogfact")
    public ResponseEntity<DogFactDto> getDogFact(@RequestParam(value = "max_length", defaultValue = "200", required = false) int len) {
        log.info(String.format("Getting Dog Fact - Length:%d", len));
        return dogFactService.getDogFact(len);
    }

    @GetMapping("/dogImage/{breed}")
    public ResponseEntity<DogImagesDto> getDogImgs(@PathVariable String breed) {
        log.info(String.format("Getting Dog Images - %s", breed));
        return dogImageService.getDogImgs(breed);
    }

    @GetMapping("/dogInfo/{breed}")
    public ResponseEntity<DogInfoDto> getDogInfo(@PathVariable String breed) {
        log.info(String.format("Getting Dog Info - %s", breed));
        return dogInfoService.getDogInfo(breed);
    }
}
