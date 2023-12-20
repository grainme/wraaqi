package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    final UserRepository userRepository;
    public List<User> findAll(){
        return userRepository.findAll();
    }
    public User saveUser(User user){
        return userRepository.save(user);
    }
    public User updateUser(User user){
        return userRepository.save(user);
    }
    public Optional<User> findUserById(Long id){
        return userRepository.findById(id);
    }
    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }
    public User findByEmailAndPassword(String email,String password){
        return userRepository.findByEmailAndPassword(email,password);
    }
    public User findByEmail(String email,String cin){
        return userRepository.findByEmailAndCin(email,cin);
    }
    public long count(){
        return userRepository.count();
    }
    public List<Map<String, Long>> countUsersByVille() {
        List<Map<String, Long>> countUsersByVille = new ArrayList<>();

        for (Object[] o : userRepository.countUsersByVille()) {
            Map<String, Long> s = new HashMap<>();

            String ville = o[0] != null ? (String) o[0] : "Unknown";
            Long userCount = o[1] != null ? (Long) o[1] : 0L;

            s.put(ville, userCount);
            countUsersByVille.add(s);
        }

        return countUsersByVille;
    }
    public Map<Integer, Long> countOccurrencesOfAges() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .collect(Collectors.groupingBy(User::getAge, Collectors.counting()));
    }
    public Map<String, Long> countOccurrencesOfGenders() {
        List<User> userList = userRepository.findAll();
        return userList.stream()
                .collect(Collectors.groupingBy(User::getGender, Collectors.counting()));
    }

}
