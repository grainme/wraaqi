package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("http://localhost:5173")
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {
    final UserService userService;

    @GetMapping("/listOfUsers")
    public List<User> findAllUsers(){
        return userService.findAll();
    }
    @PostMapping("/saveUser")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    @PutMapping("/updateUser")
    public User updateUser(@RequestBody User user){
        return userService.updateUser(user);
    }
    @GetMapping("/findById/{id}")
    public Optional<User> findUserById(@PathVariable("id") Long id){
        return userService.findUserById(id);
    }
    @DeleteMapping("/deleteById/{id}")
    public void deleteId(@PathVariable("id") Long id){
        userService.deleteUser(id);
    }
    @PostMapping("/checkUser")
    public ResponseEntity<?> checkUserExistence(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        User user = userService.findByEmailAndPassword(email, password);

        if (user != null) {
            // User found, send a success response with the user object
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            // User not found, send an error response
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }
    @PostMapping("/findUserByEmailAndCin")
    public ResponseEntity<?> findUserByEmail(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String cin = credentials.get("cin");

        User user = userService.findByEmail(email,cin);

        if (user != null) {
            // User found, send a success response with the user object
            return new ResponseEntity<>(user, HttpStatus.OK);
        } else {
            // User not found, send an error response
            return new ResponseEntity<>("User not found", HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/numbreOfUsers")
    public long count(){
        return userService.count();
    }
    @GetMapping("/countUsersByVille")
    public List<Map<String, Long>> countUsersByVille(){
        return userService.countUsersByVille();
    }

    @GetMapping("/countOccurrencesOfAges")
    public Map<Integer, Long> countOccurrencesOfAges() {
        return userService.countOccurrencesOfAges();
    }
    @GetMapping("/countOccurrencesOfGenders")
    public Map<String, Long> countOccurrencesOfGenders() {
        return userService.countOccurrencesOfGenders();
    }
}
