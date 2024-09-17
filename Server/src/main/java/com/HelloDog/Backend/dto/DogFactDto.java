package com.HelloDog.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@AllArgsConstructor
public class DogFactDto {
    private String dogFact;
}
