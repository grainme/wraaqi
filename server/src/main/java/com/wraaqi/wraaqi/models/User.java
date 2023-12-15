package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Inheritance(strategy=InheritanceType.JOINED)
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id;
    private String firstname;
    private String lastname;
    private int age;
    @Embedded
    private Adresse adresse;
    private String email;
    private String password;
    private String role;
    private String  nationalite;
    @OneToMany(mappedBy = "citoyen")
    private List<DemandeCitoyen> listeDemandes;

}

