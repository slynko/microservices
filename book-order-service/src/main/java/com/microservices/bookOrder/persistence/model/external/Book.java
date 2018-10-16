package com.microservices.bookOrder.persistence.model.external;

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
	@Column(name = "publication_date_time")
	private Instant publicationDateTime;


}