package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
public class UserControllers {
    @Autowired
    public UserServices userServices;


    @PostMapping("/save")
    public User saveUser(@RequestBody User user){
        return userServices.saveUser(user);
    }

    @GetMapping("/users")
    public List<User> getUsers(){
        return userServices.getUsers();
    }

    @PostMapping("/login")
    public User findUserByMailAndPassword(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");
        return userServices.findByEmailAndPassword(email, password);
    }

}
