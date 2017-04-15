package com.example.article;

import lombok.Data;
import java.time.OffsetDateTime;

/**
 * Created by nayoonho on 2017. 4. 8..
 */
@Data  // getter, setter, toString, EqulsAndHashCode
public class Article {
    private Long   id;
    private String title;
    private String author;
    private String body;
    private OffsetDateTime created;

    public Article(){

    }

    public Article(Long id, String title, String author, String body) {
        this.id      = id;
        this.title   = title;
        this.author  = author;
        this.body    = body;
        this.created = OffsetDateTime.now();
    }

}
