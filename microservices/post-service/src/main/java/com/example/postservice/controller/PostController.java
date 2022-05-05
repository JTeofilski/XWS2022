package com.example.postservice.controller;

import com.example.postservice.model.Post;
import com.example.postservice.model.other.User;
import com.example.postservice.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.ws.rs.Path;
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

    // 1.2 Pregled postova na javnim profilima
    @GetMapping("/{username}")
    public ResponseEntity<?> findByUsername(@PathVariable String username){
        try {
            User user = restTemplate.getForObject("http://ms-profile/api/user/"+username, User.class);
            //System.out.println(user);
            String errMsg = "Korisnicki profil je privatan";

            if (user.isPublic()){
                return ResponseEntity.ok().body(postService.findByUsername(username));
            }else{
                return ResponseEntity.ok().body(errMsg);
            }
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }


    @PutMapping("/like/{postId}")
    public ResponseEntity<?> like(@PathVariable String postId){
        try {
            return  ResponseEntity.status(200).body(postService.like(postId));
        } catch (IllegalArgumentException e) {
        return ResponseEntity.status(400).body(e.getMessage());
    }
    }

    @PutMapping("/dislike/{postId}")
    public ResponseEntity<?> dislike(@PathVariable String postId){
        try {
            return  ResponseEntity.status(200).body(postService.dislike(postId));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(400).body(e.getMessage());
        }
    }


}
