package com.microservices.bookRegistry.controller;

import com.microservices.bookRegistry.persistence.BookRegistryRepository;
import com.microservices.bookRegistry.persistence.model.BookRecord;
import com.microservices.bookRegistry.persistence.model.external.Book;
import com.microservices.bookRegistry.persistence.model.external.User;
import com.microservices.bookRegistry.proxy.BookServiceProxy;
import com.microservices.bookRegistry.proxy.UserServiceProxy;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BookRegistryController {

    private final BookRegistryRepository repository;
    private final UserServiceProxy userServiceProxy;
    private final BookServiceProxy bookServiceProxy;

    @GetMapping("/book-record")
    public List<BookRecord> findAllBookRecords() {
        return repository.findAll();
    }

    @PostMapping("/book-record/{login}/{bookId}")
    public BookRecord addBookRecord( @RequestHeader HttpHeaders headers, @PathVariable String login, @PathVariable String bookId) {
//        return repository.save(bookRecord);
        User byLogin = userServiceProxy.findByLogin(login);
        Book byId = bookServiceProxy.findById(bookId);
        return null;
    }

}
