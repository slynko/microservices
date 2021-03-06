package com.microservices.bookRegistry.controller;

import com.microservices.bookRegistry.persistence.BookRegistryRepository;
import com.microservices.bookRegistry.persistence.model.BookRecord;
import com.microservices.bookRegistry.persistence.model.BookRecordRequest;
import com.microservices.bookRegistry.persistence.model.BookStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

@RestController
@RequiredArgsConstructor
public class BookRegistryController {

    private final BookRegistryRepository repository;

    @GetMapping("/book-record")
    public List<BookRecord> findAllBookRecords() {
        return repository.findAll();
    }

    @PostMapping("/book-record/approve/{id}")
    public BookRecord approve(@PathVariable Long id) {
        repository.findById(id).ifPresent(br -> {
            br.setApproved(true);
            repository.save(br);
        });

        return repository.findById(id).orElse(null);
    }

    @PostMapping("/book-record/{login}/{bookId}")
    public BookRecord addBookRecord(@PathVariable String login, @PathVariable String bookId,
                                    @RequestBody BookRecordRequest bookRecordRequest) {

        BookRecord bookRecord = new BookRecord();
        bookRecord.setLogin(login);
        bookRecord.setBookId(bookId);
        bookRecord.setBookStatus(BookStatus.valueOf(bookRecordRequest.getStatus().toUpperCase()));
        bookRecord.setFromDate(Instant.now());
        bookRecord.setDueDate(bookRecordRequest.getDueDateTime());
        bookRecord.setPenalty(0d);
        bookRecord.setApproved(false);

        return repository.save(bookRecord);
    }

    @GetMapping("/book-record/{login}")
    public List<BookRecord> getByLogin(@PathVariable String login) {
        return repository.findByLogin(login);
    }
}
