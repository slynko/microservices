package com.microservices.bookRegistry.proxy;

import com.microservices.bookRegistry.persistence.model.external.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name="netflix-zuul-api-gateway-server")
public interface UserServiceProxy {

    @GetMapping("/user-service/user/{login}")
    User findByLogin(@PathVariable("login") String login);

}
