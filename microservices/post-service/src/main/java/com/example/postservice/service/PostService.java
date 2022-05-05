package com.example.postservice.service;

import com.example.postservice.model.Post;
import com.example.postservice.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public Post create(Post post){
        postRepository.save(post);
        return post;
    }

    public List<Post> findByUsername(String username){

        return postRepository.findByUsername(username);
    }
}
