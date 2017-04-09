package com.example.article;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.junit4.statements.SpringRepeat;

import static org.hamcrest.CoreMatchers.*;
import static org.junit.Assert.*;

/**
 * Created by nayoonho on 2017. 4. 8..
 */
@SpringBootTest
@RunWith(SpringRunner.class)
public class ArtcleServiceTest {

    @Autowired
    private ArticleService artcleService;


    @Test
    public void 게시물_만들기_테스트(){
        // given : 테스트할때 필요한 정보들

        ArticleCreateRequest request = new ArticleCreateRequest(1L, "제목", "작가", "본문");

        // when : 테스트 코드 실행
        Article article = artcleService.createArticle(request);
        // then : 테스트 결과 검증
        assertThat(article.getId(),      is(1L));
        assertThat(article.getAuthor(),  is("작가"));
        assertThat(article.getTitle(),   is("제목"));
        assertThat(article.getBody(),    is("본문"));
        assertThat(article.getCreated(), is(notNullValue()));
    }

    @Test
    public void 게시물_읽기_테스트(){

        // given : 테스트할때 필요한 정보들
        ArticleCreateRequest request = new ArticleCreateRequest(1L, "제목", "작가", "본문");
        artcleService.createArticle(request);

        // when : 테스트 코드 실행
        Article article = artcleService.getArtcle(1L);

        // then : 테스트 결과 검증
        assertThat(article.getId(),      is(1L));
        assertThat(article.getAuthor(),  is("작가"));
        assertThat(article.getTitle(),   is("제목"));
        assertThat(article.getBody(),    is("본문"));
        assertThat(article.getCreated(), is(notNullValue()));

    }
}