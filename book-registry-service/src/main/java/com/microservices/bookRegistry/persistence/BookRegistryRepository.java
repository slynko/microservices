package com.microservices.bookRegistry.persistence;

import com.microservices.bookRegistry.persistence.model.BookRecord;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRegistryRepository extends JpaRepository<BookRecord, Long> {

}
