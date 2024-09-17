package com.HelloDog.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class DogImagesDto {
    private List<String> imgs;
    private int len;
}
