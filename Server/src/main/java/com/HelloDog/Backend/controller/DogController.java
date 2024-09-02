package com.HelloDog.Backend.controller;

import com.HelloDog.Backend.dto.DogFactDto;
import com.HelloDog.Backend.service.DogFactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class DogController {
    private final DogFactService dogFactService;

    @Autowired
    public DogController(DogFactService dogFactService) {
        this.dogFactService = dogFactService;
    }

    @GetMapping("/dogfact")
    public ResponseEntity<DogFactDto> getDogFact(@RequestParam(value = "max_length", defaultValue = "0", required = false) String len) {
        if(len.equals("0")) return dogFactService.getDogFact();
        int maxLen = Integer.parseInt(len);
        return dogFactService.getDogFact(maxLen);
    }
}
