package com.example.postservice.service;

import com.example.postservice.model.Post;
import com.example.postservice.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
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

    public Post like(String postId){
        Optional<Post> op = postRepository.findById(postId);
        op.get().setLike(op.get().getLike()+1);
        postRepository.save(op.get());
        return  op.get();
    }

    public Post dislike(String postId){
        Optional<Post> op = postRepository.findById(postId);
        op.get().setDislike(op.get().getDislike()+1);
        postRepository.save(op.get());
        return  op.get();
    }



}
