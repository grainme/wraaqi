package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@DiscriminatorValue("F")
@Inheritance(strategy= InheritanceType.JOINED)
@DiscriminatorColumn(name="Fonctionnaire_role")
public class Fonctionnaire extends User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id ;
}
