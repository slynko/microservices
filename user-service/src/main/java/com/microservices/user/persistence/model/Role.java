package com.microservices.user.persistence.model;

import javax.persistence.Entity;

//@Entity
public enum Role {
	ADMIN, READER, LIBRARIAN, NO_ROLE;
}
