package com.example.article;

/**
 * Created by nayoonho on 2017. 4. 8..
 */
public class ArticleCreateRequest {

    private Long   id;
    private String title;
    private String author;
    private String body;

    public ArticleCreateRequest(Long id, String title, String author, String body) {
        this.id     = id;
        this.title  = title;
        this.author = author;
        this.body   = body;
    }

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
}
