package com.text.spring;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
public class TestSpringApplication {
	
	@Bean
	public RestTemplate getresttemplate() {
		return new RestTemplate();
	}
	public static void main(String[] args) {

		SpringApplication.run(TestSpringApplication.class, args);
//	
//		CConexion objetoConexion = new CConexion();
//		objetoConexion.establecerConexion();
//		
	}

}
