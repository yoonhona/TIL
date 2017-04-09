package com.example.article;

import java.time.LocalDateTime;
import java.time.OffsetDateTime;

/**
 * Created by nayoonho on 2017. 4. 8..
 */
public class Article {
    private Long   id;
    private String title;
    private String author;
    private String body;
    private OffsetDateTime created;

    public Article(){

    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public void setCreated(OffsetDateTime created) {
        this.created = created;
    }

    public Article(Long id, String title, String author, String body) {
        this.id      = id;
        this.title   = title;
        this.author  = author;
        this.body    = body;
        this.created = OffsetDateTime.now();
    }
//LocalDateTime, OffsetDateTimeN
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public String getBody() {
        return body;
    }

    public OffsetDateTime getCreated() {
        return created;
    }
}
