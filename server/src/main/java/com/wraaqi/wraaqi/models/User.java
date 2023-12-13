package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@Inheritance(strategy=InheritanceType.JOINED)
@DiscriminatorColumn(name="user_role")
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id;
    private String firstname;
    private String lastname;
    private int age;
    private String email;
    private String password;
    private String role;
    private String  nationalite;

}

