package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;

@DiscriminatorValue("FL")
public class FonctionnaireLegalisation extends Fonctionnaire{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id ;
}
