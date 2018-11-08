package com.microservices.bookRegistry.persistence;

import com.microservices.bookRegistry.persistence.model.BookRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRegistryRepository extends JpaRepository<BookRecord, Long> {
    List<BookRecord> findByLogin(String login);
}
