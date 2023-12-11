package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;

@DiscriminatorValue("FD")
public class FonctionnaireDocs extends Fonctionnaire{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id ;
}
