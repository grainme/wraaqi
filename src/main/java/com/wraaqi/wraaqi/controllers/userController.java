package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/user")
public class userController {
    private final UserServices UserService;

    @Autowired
    public userController(UserServices userService) {
        this.UserService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return UserService.hello();
    }
}
