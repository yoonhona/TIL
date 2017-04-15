package com.example.article;

import lombok.*;

/**
 * Created by nayoonho on 2017. 4. 8..
 */
@Getter                 // 빌드 시 어노테이션을 보고 필요한 소스를 빌드 해준다.
@Setter                 // 빌드된 소스 참고 해보자
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode      // 이펙티브 자바 보자
public class ArticleCreateRequest {

    private Long   id;
    private String title;
    private String author;
    private String body;

}
