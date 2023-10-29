package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {

    private final UserRepository userRepository;

    @Autowired
    public UserServices(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> hello(){
        return userRepository.findAll();
    }
}
