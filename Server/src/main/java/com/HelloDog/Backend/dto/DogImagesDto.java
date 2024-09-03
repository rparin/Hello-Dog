package com.HelloDog.Backend.dto;

import lombok.Data;

import java.util.List;

@Data
public class DogImagesDto {
    private List<String> imgs;
    private int len;
}
