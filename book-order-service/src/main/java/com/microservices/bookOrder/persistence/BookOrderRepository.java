package com.microservices.bookOrder.persistence;

import com.microservices.bookOrder.persistence.model.BookOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookOrderRepository extends JpaRepository<BookOrder, Long> {

}
