package com.microservices.bookRegistry.controller;

import com.microservices.bookRegistry.persistence.BookRegistryRepository;
import com.microservices.bookRegistry.persistence.model.BookRecord;
import com.microservices.bookRegistry.persistence.model.BookStatus;
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

import javax.swing.text.html.Option;
import java.time.Instant;
import java.util.List;
import java.util.Optional;

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
    public BookRecord addBookRecord(@PathVariable String login, @PathVariable String bookId) {
        User user = userServiceProxy.findByLogin(login);
        Book book = bookServiceProxy.findById(bookId).get();

        BookRecord bookRecord = new BookRecord();
        bookRecord.setBook(book);
        bookRecord.setUser(user);
        bookRecord.setBookStatus(BookStatus.TAKEN);
        bookRecord.setFromDate(Instant.now());
        bookRecord.setDueDate(Instant.now());
        bookRecord.setPenalty(10d);
        return repository.save(bookRecord);
    }

}
