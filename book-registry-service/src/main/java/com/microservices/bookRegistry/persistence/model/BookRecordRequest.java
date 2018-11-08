package com.microservices.bookRegistry.persistence.model;

import java.time.Instant;

public class BookRecordRequest {
    private String status;
    private Instant dueDateTime;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Instant getDueDateTime() {
        return dueDateTime;
    }

    public void setDueDateTime(Instant dueDateTime) {
        this.dueDateTime = dueDateTime;
    }
}
