package com.example.postservice.controller;

import com.example.postservice.model.Post;
import com.example.postservice.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/post", produces = MediaType.APPLICATION_JSON_VALUE)
public class PostController {

    @Autowired
    private PostService postService;

    @Autowired
    private RestTemplate restTemplate;



    @PostMapping
    public ResponseEntity<?> create(@RequestBody Post post){
        try {
            return ResponseEntity.ok().body(postService.create(post));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }

    @GetMapping("/{username}")
    public ResponseEntity<?> findByUsername(@PathVariable String username){
        try {
            Object object = restTemplate.getForObject("http://ms-profile/api/user/"+username, Object.class);
            System.out.println(object);
            return ResponseEntity.ok().body(postService.findByUsername(username));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }

    }

    /* @GetMapping("/profile")
    public List<Object> getProfiles(){
        Object[] objects = restTemplate.getForObject("http://ms-profile/api/customer", Object[].class);
        System.out.println(Arrays.asList(objects));
        return Arrays.asList(objects);
    }*/
}
