package com.example.profileservice.contoller;

import com.example.profileservice.model.dto.UserDTO;
import com.example.profileservice.model.users.Customer;
import com.example.profileservice.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/customer", produces = MediaType.APPLICATION_JSON_VALUE)
public class CustomerController {

    private CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService){
        this.customerService = customerService;
    }

    @GetMapping
    public ResponseEntity<List<Customer>> findAll() {
        return ResponseEntity.ok().body(this.customerService.findAll());
    }

    // Registracija
    @PostMapping
    public ResponseEntity<?> create(@RequestBody UserDTO userDTO){
        try {
            return ResponseEntity.ok().body(customerService.create(userDTO));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }



}
