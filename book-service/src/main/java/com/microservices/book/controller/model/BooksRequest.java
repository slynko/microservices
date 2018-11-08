package com.microservices.book.controller.model;

import java.util.Set;

public class BooksRequest {
    Set<Long> ids;

    public Set<Long> getIds() {
        return ids;
    }

    public void setIds(Set<Long> ids) {
        this.ids = ids;
    }
}
