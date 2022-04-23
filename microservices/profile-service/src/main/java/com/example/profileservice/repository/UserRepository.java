package com.example.profileservice.repository;

import com.example.profileservice.model.users.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    User findUserByEmail(String email);
}
