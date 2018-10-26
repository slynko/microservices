package com.microservices.book.persistence.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.Instant;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Book {

	@Id
	private Long id;
	@Column
	private String title;
	@Column
	private String author;
	@Column
	private String edition;
	@Column
	private String description;
	@Column(name = "publication_date_time")
	private Instant publicationDateTime;


}