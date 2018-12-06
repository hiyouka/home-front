package com.jy.blog.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

/**
 * create by jianglei on 2018/9/14
 * @since 1.0.0
 */
@Configuration
public class ViewConfig extends WebMvcConfigurerAdapter {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/login").setViewName("index");
        registry.addViewController("/showdown").setViewName("editor/showdown");
        registry.addViewController("/blog/index").setViewName("blog/index");
        registry.addViewController("/blog/login").setViewName("blog/login");
        registry.addViewController("/notFind").setViewName("404");
        registry.addViewController("/tables").setViewName("blog/tables");
    }

//    @RequestMapping("/login")
//    public String index(){
//        return "index";
//    }
//
//    @GetMapping("/showdown")
//    public String showdown(){
//        return "editor/showdown";
//    }
//
//    @GetMapping("/blog/index")
//    public String blogIndex(){
//        return "blog/index";
//    }
//
//    @RequestMapping("/notFind")
//    public String error(){
//        return "404";
//    }
//
//    @ResponseBody
//    @GetMapping("/getUser")
//    public User getUser(){
//        SecurityContext context = SecurityContextHolder.getContext();
//        Authentication authentication = context.getAuthentication();
//        Object principal = authentication.getPrincipal();
//        return (User)principal;
//    }

}