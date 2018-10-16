package com.microservices.user.controller;

import com.microservices.user.persistence.model.User;
import com.microservices.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/user")
    public List<User> findAllUsers() {
        return userService.findAll();
    }

//    @PostMapping("/user")
//    public User addBook(@RequestBody User user) {
//        return userService.save(user);
//    }

}
