package com.example.profileservice.repository;

import com.example.profileservice.model.users.User;
import com.sun.xml.bind.v2.model.core.ID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.yaml.snakeyaml.events.Event;

import java.util.List;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {

    User findUserByEmail(String email);

    @Query("SELECT u FROM User u WHERE (u.username LIKE %:input% OR u.name LIKE %:input% OR u.surname LIKE %:input%) AND u.isPublic = TRUE")
    List<User> search(String input);

    User findByUsername(String username);
}
