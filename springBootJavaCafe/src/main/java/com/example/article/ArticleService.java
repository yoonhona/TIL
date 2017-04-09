package com.example.article;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.AccessibleObject;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by nayoonho on 2017. 4. 8..
 */
@Service
public class ArticleService {

    @Autowired
    private ArticleRepository repository;

    public Article createArticle(ArticleCreateRequest request){
        Article article =  new Article(
                  request.getId()
                , request.getTitle()
                , request.getAuthor()
                , request.getBody());

        repository.add(article);

        return article;
    }

    public Article getArtcle(long articleId) {

        return repository.get(articleId);
    }
}
