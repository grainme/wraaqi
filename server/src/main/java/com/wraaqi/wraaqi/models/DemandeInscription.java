package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Table(name = "demandeInscription")
@DiscriminatorValue("DI")
public class DemandeInscription extends Demande {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private String firstname;
    private String lastname;
    private String email;
    private String cin;
    private Integer age;
    private String nationality;
}
