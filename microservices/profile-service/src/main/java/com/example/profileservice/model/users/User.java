package com.example.profileservice.model.users;

import com.example.profileservice.model.enums.GENDER;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "users")
@Inheritance(strategy = InheritanceType.JOINED)
public class User {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "id", nullable = false, unique = true)
    private UUID id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column
    private GENDER gender;

    @Column(name = "date_of_birth")
    private String dateOfBirth;

    @Column(name = "biography")
    private String biography;

    @Column(name = "work_experience")
    private String workExperience;

    @Column(name = "education")
    private String education;

    @Column(name = "skills")
    private String skills;

    @Column(name = "interests")
    private String interests;
}
