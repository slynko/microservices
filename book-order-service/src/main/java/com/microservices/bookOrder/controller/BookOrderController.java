package com.microservices.bookOrder.controller;

import com.microservices.bookOrder.exception.OrderNotFoundException;
import com.microservices.bookOrder.persistence.BookOrderRepository;
import com.microservices.bookOrder.persistence.model.BookOrder;
import com.microservices.bookOrder.persistence.model.OrderStatus;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class BookOrderController {

    private final BookOrderRepository repository;

    @GetMapping("/book-order")
    public List<BookOrder> findAll() {
        return repository.findAll();
    }

    @GetMapping("/book-order/{id}/complete")
    public BookOrder completeOrder(@PathVariable Long id) {
        return repository.findById(id).map(bookOrder -> {
            bookOrder.setOrderStatus(OrderStatus.DONE);
            return repository.save(bookOrder);
        }).orElseThrow(OrderNotFoundException::new);
    }

    @GetMapping("/book-order/{login}")
    public List<BookOrder> getByLogin(@PathVariable String login) {
        return repository.findByLogin(login);
    }
}
