package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.userService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired
    userService uService;
    @PostMapping("/add")
    String addUser(@RequestBody User user)
    {
        //System.out.println("into Controller");
        uService.addUser(user);
        return "Naa inga vanten paa";
    }
    @PostMapping("/validate")
    boolean validateUser(@RequestBody User user)
    {
        String mail = user.getMailid();
        String password = user.getPassword();
        //System.out.println(mail);
        User user1 = uService.findUser(mail);
        System.out.println(user1);
        System.out.println("vangiten paaa");
        if(user1 == null)    return false;
        if(user1.getPassword().equals(user.getPassword()))
            return true;
        return false;
    }
}
