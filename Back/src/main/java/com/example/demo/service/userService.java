package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;

@Service
public class userService {
    @Autowired
    UserRepo userRepo;
    public void addUser(User user)
    {
        userRepo.save(user);
        //return new ResponseEntity<>(user,HttpStatus.OK);
    }
    public User findUser(String mail)
    {
        return userRepo.findBymailid(mail);
    }
}
