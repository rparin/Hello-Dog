package com.HelloDog.Backend.models;

import lombok.Data;

@Data
public class DogInfoResponse {
    private String name;
    private String image_link;
    private int good_with_children;
    private int good_with_other_dogs;
    private int good_with_strangers;
    private int shedding;
    private int grooming;
    private int drooling;
    private int coat_length;
    private int playfulness;
    private int protectiveness;
    private int trainability;
    private int energy;
    private int barking;
    private int min_life_expectancy;
    private int max_life_expectancy;
    private int max_height_male;
    private int max_height_female;
    private int max_weight_male;
    private int max_weight_female;
    private int min_height_male;
    private int min_height_female;
    private int min_weight_male;
    private int min_weight_female;
}
