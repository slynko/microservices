package com.microservices.bookRegistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BookRegistryServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(BookRegistryServiceApplication.class, args);
	}

}
