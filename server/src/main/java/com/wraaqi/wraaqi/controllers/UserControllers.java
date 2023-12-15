package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
@CrossOrigin("http://localhost:5174")
@RequestMapping("/user")
public class UserControllers {
    @Autowired
    public UserServices userServices;


    @PostMapping("/saveUser")
    public User saveUser(@RequestBody User user){
        return userServices.saveUser(user);
    }

    @GetMapping("/listOfUsers")
    public List<User> getUsers(){
        return userServices.getUsers();
    }

    @PostMapping("/checkUser")
    public ResponseEntity<?> findUserByMailAndPassword(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        User user = userServices.findByEmailAndPassword(email, password);

        if (user != null) {
            // User found, send a success response with the user object
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            // User not found, send an error response
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }

}
