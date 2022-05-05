package com.example.postservice.model.other;

import lombok.Data;

import java.util.Set;
import java.util.UUID;

@Data
public class User {

    private UUID id;


    private String username;


    private String email;


    private String name;


    private String surname;


    private String password;


    private String phoneNumber;


    private String gender;


    private String dateOfBirth;


    private String biography;


    private String workExperience;


    private String education;


    private String skills;


    private String interests;


    private boolean isPublic = true;


    private Set<Object> roles;
}
