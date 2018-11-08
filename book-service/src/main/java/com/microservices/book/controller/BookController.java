package com.microservices.book.controller;

import com.microservices.book.persistence.BookRepository;
import com.microservices.book.persistence.model.Book;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Calendar;
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

    @PutMapping("/book/{id}")
    public Book updateBook(@RequestBody Book book) {
        return repository.save(book);
    }

    @DeleteMapping("/book/{id}")
    public void deleteBook(@PathVariable Long id) {
        repository.deleteById(id);
    }

    @GetMapping("/book/title/{title}")
    public List<Book> findByTitle(@PathVariable String title) {
        return repository.findByTitleContaining(title);
    }

    @GetMapping("/book/author/{author}")
    public List<Book> findByAuthor(@PathVariable String author) {
        return repository.findByAuthorContaining(author);
    }

    @GetMapping("/book/author/{author}/title/{title}")
    public List<Book> findByAuthorAndTitle(@PathVariable String author, @PathVariable String title) {
        return repository.findByAuthorAndTitleContaining(author, title);
    }

    @GetMapping("/book/edition/{edition}")
    public List<Book> findByEdition(@PathVariable String edition) {
        return repository.findByEditionContaining(edition);
    }

    @GetMapping("/book/year/{year}")
    public List<Book> findByYear(@PathVariable String year) {
        Calendar instance = Calendar.getInstance();
        instance.set(Integer.valueOf(year), Calendar.JANUARY, 0);
        return repository.findByPublicationDateTimeAfter(instance.toInstant());
    }
}
