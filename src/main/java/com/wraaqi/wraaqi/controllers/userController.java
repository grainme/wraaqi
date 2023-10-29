package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/user")
public class userController {
    private final UserServices userService;

    @Autowired
    public userController(UserServices userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getUsers(){
        return userService.hello();
    }

    @PostMapping
    public void registerNewUser(@RequestBody User user){
        userService.addNewUser(user);
    }

    @DeleteMapping(path = "{userId}")
    public  void deleteUserById(@PathVariable("userId") Long userId){
        userService.deleteUser(userId);
    }
}
