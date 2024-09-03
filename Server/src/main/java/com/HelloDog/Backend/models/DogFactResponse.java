package com.HelloDog.Backend.models;

import lombok.Data;

import java.util.List;

@Data
public class DogFactResponse {
    private List<DogFactResDataItem> data;

    @Data
    public static class DogFactResDataItem {
        private String id;
        private String type;
        private DogFactResDataAttriItem attributes;

        @Data
        public static class DogFactResDataAttriItem {
            public String body;
        }
    }
}
