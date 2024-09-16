package com.HelloDog.Backend.dto;


import lombok.Data;
import lombok.Builder;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DogInfoDto {
    private String name;
    private String img;
    private int goodWithChildren;
    private int goodWithOtherDogs;
    private int goodWithStrangers;
    private int shedding;
    private int grooming;
    private int drooling;
    private int coatLength;
    private int playfulness;
    private int protectiveness;
    private int trainability;
    private int energy;
    private int barking;
    private int minLifeExpectancy;
    private int maxLifeExpectancy;
    private int maxHeightMale;
    private int minHeightMale;
    private int maxHeightFemale;
    private int minHeightFemale;
    private int maxWeightMale;
    private int minWeightMale;
    private int maxWeightFemale;
    private int minWeightFemale;
}
