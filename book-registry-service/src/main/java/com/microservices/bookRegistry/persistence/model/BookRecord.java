package com.microservices.bookRegistry.persistence.model;

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
	@Column
	private String login;
	@Column(name = "book_id")
	private String bookId;
	@Enumerated(EnumType.STRING)
	@Column(name = "book_status")
	private BookStatus bookStatus;
	@Column(name = "from_date")
	private Instant fromDate;
	@Column(name = "due_date")
	private Instant dueDate;
	@Column
	private Double penalty;
	@Column
	private Boolean approved;
}