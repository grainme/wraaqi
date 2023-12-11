package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@DiscriminatorValue("C")
public class Citoyen extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id ;

    @OneToMany(mappedBy = "citoyen")
    private List<DemandeCitoyen> listeDemandes;
}
