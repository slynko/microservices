package com.microservices.bookRegistry.controller;

import com.microservices.bookRegistry.persistence.BookRegistryRepository;
import com.microservices.bookRegistry.persistence.model.BookRecord;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BookRegistryController {

    private final BookRegistryRepository repository;

    @GetMapping("/book-record")
    public List<BookRecord> findAllBookRecords() {
        return repository.findAll();
    }

}
