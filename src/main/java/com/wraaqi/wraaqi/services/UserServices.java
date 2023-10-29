package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

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

    public void addNewUser(User user){
        Optional<User> userByName =  userRepository.findUserByName(user.getName());
        if(userByName.isPresent()){
            throw new IllegalStateException("email taken");
        }
        userRepository.save(user);
    }

    public void deleteUser(Long userId) {
        boolean exists = userRepository.existsById(userId);
        if(!exists){
            throw new IllegalStateException("User with Id "+ userId + " does not exists!");
        }
        userRepository.deleteById(userId);
    }
}
