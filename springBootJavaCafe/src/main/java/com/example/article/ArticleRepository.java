package com.example.article;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.OffsetDateTime;
import java.util.Date;

/**
 * Created by nayoonho on 2017. 4. 8..
 */
@Repository
public class ArticleRepository {

    @Autowired
    DataSource dataSource;

    public void add(Article article) {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

        String sql = "INSERT INTO ARTICLE(id, title, author, body, created)";
        sql += " values(?, ?, ?, ?, ?)";

        jdbcTemplate.update(sql, new Object[]{
                article.getId(),
                article.getTitle(),
                article.getAuthor(),
                article.getBody(),
                new Date(article.getCreated().toInstant().toEpochMilli())});
    }

    public Article get(Long id){
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);

        return jdbcTemplate.queryForObject("select * from article where id = ?"
                , new Object[]{id}
                , new RowMapper<Article>() {

            @Override
            public Article mapRow(ResultSet resultSet, int i) throws SQLException {
                Article article = new Article();
                article.setId(resultSet.getLong("ID"));
                article.setTitle(resultSet.getString("TITLE"));
                article.setAuthor(resultSet.getString("AUTHOR") );
                article.setBody(resultSet.getString("BODY"));
                article.setCreated(OffsetDateTime.now());
                return article;
            }
        });
    }
}
