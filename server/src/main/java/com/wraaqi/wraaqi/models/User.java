package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    private String firstname;
    @Column(unique = true)
    private String cin;
    private String lastname;
    private int age;
    private String gender;
    @Column(unique = true)
    private String email;
    private String password;
    private String role;
    private String nationality;
    private boolean Online;
    @Embedded
    private Adresse adresse;
    private String telephone;
}

