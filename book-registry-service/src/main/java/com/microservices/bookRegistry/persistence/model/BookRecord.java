package com.microservices.bookRegistry.persistence.model;

import com.microservices.bookRegistry.persistence.model.external.Book;
import com.microservices.bookRegistry.persistence.model.external.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class BookRecord {

	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Long id;
	@OneToOne
	private User user;
	@OneToOne
	private Book book;
	@Enumerated(EnumType.STRING)
	@Column(name = "book_status")
	private BookStatus bookStatus;
	@Column(name = "from_date")
	private Instant fromDate;
	@Column(name = "due_date")
	private Instant dueDate;
	@Column
	private Double penalty;
}