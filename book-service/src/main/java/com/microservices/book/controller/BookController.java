package com.microservices.book.controller;

import com.microservices.book.persistence.BookRepository;
import com.microservices.book.persistence.model.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class BookController {

    private final BookRepository repository;

    @GetMapping("/book")
    public List<Book> findAllBooks() {
        return repository.findAll();
    }

    @GetMapping("/book/{id}")
    public Optional<Book> findBook(@PathVariable Long id) {
        return repository.findById(id);
    }

    @PostMapping("/book")
    public Book addBook(@RequestBody Book book) {
        return repository.save(book);
    }

}
