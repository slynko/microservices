package com.microservices.bookRegistry.proxy;

import com.microservices.bookRegistry.persistence.model.external.Book;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

import java.util.Optional;

@FeignClient(name="book-service")
public interface BookServiceProxy {


    @GetMapping("/book/{bookId}")
    Optional<Book> findById(@PathVariable("bookId") String bookId);

}
