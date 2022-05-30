package com.example.profileservice.service;

import com.example.profileservice.model.dto.UserDTO;
import com.example.profileservice.model.users.Customer;
import com.example.profileservice.model.users.Role;
import com.example.profileservice.repository.CustomerRepository;
import com.example.profileservice.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
        customer.setPhoneNumber(u.getPhoneNumber());
        customer.setGender(u.getGender());
        customer.setDateOfBirth(u.getDateOfBirth());
        customer.setBiography(u.getBiography());
        customer.setWorkExperience(u.getWorkExperience());
        customer.setEducation(u.getEducation());
        customer.setSkills(u.getSkills());
        customer.setInterests(u.getInterests());
        customer.setPublic(u.isPublic());

        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.getRoleByRoleName("ROLE_CUSTOMER");
        roles.add(role);
        customer.setRoles(roles);

        Customer newCustomer =  customerRepository.save(customer);

        return newCustomer;
    }

    public Customer update(Customer customer){
        Customer c = customerRepository.getCustomerByEmail(customer.getEmail());

        if (c == null) {
            throw new UsernameNotFoundException("User not found in database!");
        }

        //a. Dodavanje i izmena ličnih podataka: ime, email, broj telefona, pol,
        //datum rođenja, username i biografija.
        //b. Podešavanje radnog iskustva i obrazovanja.
        //c. Podešavanje veština i interesovanja.

        c.setName(customer.getName());
        c.setSurname(customer.getSurname());
        c.setEmail(customer.getEmail());
        c.setPhoneNumber(customer.getPhoneNumber());
        c.setGender(customer.getGender());
        c.setDateOfBirth(customer.getDateOfBirth());
        c.setUsername(customer.getUsername());
        c.setBiography(customer.getBiography());

        c.setWorkExperience(customer.getWorkExperience());
        c.setEducation(customer.getEducation());

        c.setSkills(customer.getSkills());
        c.setInterests(customer.getInterests());
        return customerRepository.save(c);
    }
}
