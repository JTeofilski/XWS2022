package com.example.profileservice.model.dto;

import lombok.Data;

@Data
public class UserDTO {

    private String username;
    private String email;
    private String name;
    private String surname;
    private String password;
}
