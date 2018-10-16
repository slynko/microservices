package com.microservices.bookOrder.persistence.model;

import com.microservices.bookOrder.persistence.model.external.Book;
import com.microservices.bookOrder.persistence.model.external.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class BookOrder {

	@Id
	private Long id;
	@OneToOne
	private User user;
	@OneToOne
	private Book book;
	@Enumerated(EnumType.STRING)
	@Column(name = "order_status")
	private OrderStatus orderStatus;
}