package com.example.profileservice.repository;

import com.example.profileservice.model.users.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.UUID;

public interface CustomerRepository extends JpaRepository<Customer, UUID> {

    public Customer getCustomerByEmail(String email);
}
