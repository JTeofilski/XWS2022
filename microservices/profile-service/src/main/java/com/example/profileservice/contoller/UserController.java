package com.example.profileservice.contoller;

import com.example.profileservice.model.dto.UserDTO;
import com.example.profileservice.model.users.User;
import com.example.profileservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/user", produces = MediaType.APPLICATION_JSON_VALUE)
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<User>> findAll() {
        return ResponseEntity.ok().body(this.userService.findAll());
    }

    @PostMapping
    public ResponseEntity<User> create(@RequestBody User user){
        return ResponseEntity.ok().body(userService.create(user));

    }
    // Pretraga javnih profila
    @GetMapping("/search")
    public ResponseEntity<List<User>> findAllByInput(@RequestParam (value = "input") String input){
     // System.out.println(input);


      return ResponseEntity.ok().body(userService.findAllByInput(input));
    }

    @GetMapping("/{username}")
    public ResponseEntity<User> findByUsername(@PathVariable String username){
    /*UserDTO userdto= new UserDTO();
    User user =userService.findByUsername(username);
    userdto.setUsername(user.getUsername());
    userdto.setEmail(user.getEmail());
    userdto.setName(user.getName());
    userdto.setSurname(user.getSurname());
    userdto.setPassword(user.getPassword());
    */
    return ResponseEntity.ok().body(userService.findByUsername(username));
    }

}
