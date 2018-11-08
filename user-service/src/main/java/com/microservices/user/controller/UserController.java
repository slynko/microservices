package com.microservices.user.controller;

import com.microservices.user.controller.model.BlockUserRequest;
import com.microservices.user.persistence.UserRepository;
import com.microservices.user.persistence.model.User;
import com.microservices.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.PermitAll;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;
    private final UserRepository repository;

    //    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/user")
    public List<User> findAllUsers() {
        return userService.findAll();
    }

    @GetMapping("/user/{userId}")
    public User findUser(@PathVariable String userId) {
        return userService.findUser(userId);
    }

    @PostMapping("/user/block/{id}")
    public User blockUnblockUser(@PathVariable Long id, @RequestBody BlockUserRequest request) {
        return repository.findById(id).map(user -> {
            user.setIsBlocked(request.isBlock());
            return user;
        })
        .map(repository::save)
        .orElse(null);
    }

}
