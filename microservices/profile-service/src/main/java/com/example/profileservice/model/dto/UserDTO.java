package com.example.profileservice.model.dto;

import com.example.profileservice.model.enums.GENDER;
import lombok.Data;

@Data
public class UserDTO {

    private String username;
    private String email;
    private String name;
    private String surname;
    private String password;
    private String phoneNumber;
    private GENDER gender;
    private String dateOfBirth;
    private String biography;
    private String workExperience;
    private String education;
    private String skills;
    private String interests;
    private boolean isPublic;
}
