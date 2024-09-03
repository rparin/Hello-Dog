package com.HelloDog.Backend.controller;

import com.HelloDog.Backend.dto.DogFactDto;
import com.HelloDog.Backend.dto.DogImagesDto;
import com.HelloDog.Backend.dto.DogInfoDto;
import com.HelloDog.Backend.service.DogFactService;
import com.HelloDog.Backend.service.DogImageService;
import com.HelloDog.Backend.service.DogInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class DogController {
    private final DogFactService dogFactService;
    private final DogImageService dogImageService;
    private final DogInfoService dogInfoService;

    @Autowired
    public DogController(DogFactService dogFactService, DogImageService dogImageService, DogInfoService dogInfoService) {
        this.dogFactService = dogFactService;
        this.dogImageService = dogImageService;
        this.dogInfoService = dogInfoService;
    }

    @GetMapping("/dogfact")
    public ResponseEntity<DogFactDto> getDogFact(@RequestParam(value = "max_length", defaultValue = "0", required = false) String len) {
        if(len.equals("0")) return dogFactService.getDogFact();
        int maxLen = Integer.parseInt(len);
        return dogFactService.getDogFact(maxLen);
    }

    @GetMapping("/dogImage/{breed}")
    public ResponseEntity<DogImagesDto> getDogImgs(@PathVariable String breed) {
        return dogImageService.getDogImgs(breed);
    }

    @GetMapping("/dogInfo/{breed}")
    public ResponseEntity<DogInfoDto> getDogInfo(@PathVariable String breed) {
        return dogInfoService.getDogInfo(breed);
    }
}
