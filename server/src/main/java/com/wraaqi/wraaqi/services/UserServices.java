package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServices {

    final UserRepository userRepository;
    public User findUserByEmailAndPassword(String email, String password){
        return userRepository.findByEmailAndPassword(email, password);
    }

    public UserServices(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }
    public List<User> getUsers(){
        return userRepository.findAll();
    }

    public User findByEmailAndPassword(String email, String password){
        return userRepository.findByEmailAndPassword(email, password);
    }
}
