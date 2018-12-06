package com.jy.blog.front;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.jy.blog.config","com.jy.common.sso.config"})
@EnableEurekaClient
public class BlogJyApplication {

	public static void main(String[] args) {
		SpringApplication.run(BlogJyApplication.class, args);
	}
}
