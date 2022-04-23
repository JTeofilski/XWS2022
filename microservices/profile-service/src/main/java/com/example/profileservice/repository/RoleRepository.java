package com.example.profileservice.repository;

import com.example.profileservice.model.users.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {

    public Role getRoleByRoleName(String roleName);
}
