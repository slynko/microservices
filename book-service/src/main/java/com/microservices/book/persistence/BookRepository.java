package com.microservices.book.persistence;

import com.microservices.book.persistence.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.Instant;
import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

  List<Book> findByAuthorContaining(String author);
  List<Book> findByTitleContaining(String title);
  List<Book> findByAuthorAndTitleContaining(String author, String title);
  List<Book> findByEditionContaining(String edition);
  List<Book> findByPublicationDateTimeAfter(Instant publicationDateTime);
}
