package com.microservices.bookRegistry.proxy;

import com.microservices.bookRegistry.persistence.model.external.Book;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

@FeignClient(name="netflix-zuul-api-gateway-server")
public interface BookServiceProxy {


    @GetMapping("/book-service/book/{id}")
    Book findById(@PathVariable("id") String id);

}
