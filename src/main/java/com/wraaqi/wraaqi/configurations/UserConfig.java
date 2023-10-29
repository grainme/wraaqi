package com.wraaqi.wraaqi.configurations;

import com.wraaqi.wraaqi.models.User;
import com.wraaqi.wraaqi.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository userRepository){
        return args -> {
            User Marouane = new User(1L,"Marouane", "Student", LocalDate.of(2001, Month.AUGUST, 29));
            User Hamza = new User(2L, "Hamza", "Student", LocalDate.of(2002, Month.NOVEMBER, 14));
            userRepository.saveAll(List.of(Marouane, Hamza));
        };
    }
}
