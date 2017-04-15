package com.example.article;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

/**
 * Created by nayoonho on 2017. 4. 15..
 */
@Slf4j
@Controller
public class ArticleController {

    @Autowired
    ArticleService service;

//    @PostConstruct // 컨트롤러 실행 시 1번 실행 됨
//    public void setDummyArticle(){
//        service.createArticle(new ArticleCreateRequest(1L, "제목", "지은이", "본문" ));
//    }

    @GetMapping("/article/{articleId}")
    public String getArticle(Model model, @PathVariable Long articleId){
        log.debug("Slf4j 어노테이션을 사용해 lombok을 사용한 로그");

        Article article = service.getArtcle(articleId);
        model.addAttribute("article", article);
        return "article";
    }

    @RequestMapping("/article/create")
    public String createArticleView(){
        return "createArticle";
    }

    //
    @PostMapping("/article")
    public String createArticle(@ModelAttribute ArticleCreateRequest request){
        service.createArticle(request);
        return "redirect:/article/" + request.getId();
    }

}
