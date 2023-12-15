package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;


@Entity
public class  DemandeCitoyen {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id ;

    @ManyToOne
    private User citoyen;
}

