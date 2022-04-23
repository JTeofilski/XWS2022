package com.example.profileservice.service;

import com.example.profileservice.model.dto.UserDTO;
import com.example.profileservice.model.users.Customer;
import com.example.profileservice.model.users.Role;
import com.example.profileservice.repository.CustomerRepository;
import com.example.profileservice.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RequiredArgsConstructor
@Service
public class CustomerService {

    final private CustomerRepository customerRepository;
    final private PasswordEncoder encoder;
    final private RoleRepository roleRepository;


    public List<Customer> findAll() {
        return customerRepository.findAll();
    }


    // Registracija
    public Customer create(UserDTO u){

        Customer c = customerRepository.getCustomerByEmail(u.getEmail());

        if (c != null) {
            throw new IllegalArgumentException("Korisnik sa unetim mail-om vec postoji!");
        }
        Customer customer = new Customer();

        customer.setUsername(u.getUsername());
        customer.setEmail(u.getEmail());
        customer.setName(u.getName());
        customer.setSurname(u.getSurname());
        customer.setPassword(encoder.encode(u.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.getRoleByRoleName("ROLE_CUSTOMER");
        roles.add(role);
        customer.setRoles(roles);

        Customer newCustomer =  customerRepository.save(customer);

        return newCustomer;
    }
}
