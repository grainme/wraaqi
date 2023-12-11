package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;

@DiscriminatorValue("FR")
public class FonctionnaireReclamation extends Fonctionnaire{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id ;
}
