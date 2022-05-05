package com.example.postservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Data
@Document("posts")
public class Post {

    @Id
    private String id;
    private String text;
    private String username;


}
