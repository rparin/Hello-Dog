package com.HelloDog.Backend.models;

import lombok.Data;

import java.util.List;

@Data
public class DogFactResponse {
    @Data
    public static class DogFactResDataAttriItem {
        public String body;
    }
    @Data
    public static class DogFactResDataItem {
        public String id;
        public String type;
        public DogFactResDataAttriItem attributes;
    }
    private List<DogFactResDataItem> data;
}
