package com.microservices.bookRegistry.persistence.model.external;

import javax.persistence.Entity;

public enum Role {
	ADMIN, READER, LIBRARIAN, NO_ROLE;
}
