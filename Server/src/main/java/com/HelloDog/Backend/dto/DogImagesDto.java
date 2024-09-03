package com.HelloDog.Backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class DogImagesDto {
    private List<String> imgs;
    private int len;
}
