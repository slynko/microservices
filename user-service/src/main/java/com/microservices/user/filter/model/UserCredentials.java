package com.microservices.user.filter.model;

import lombok.Data;

@Data
public class UserCredentials {
    private String username;
    private String password;
}