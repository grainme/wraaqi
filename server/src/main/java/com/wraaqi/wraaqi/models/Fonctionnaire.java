package com.wraaqi.wraaqi.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
@Builder
@Table
public class Fonctionnaire {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Temporal(TemporalType.DATE)
    private Date employed;
    @OneToOne
    private User user;
    @OneToMany(mappedBy = "fonctionnaire")
    @JsonIgnore
    private List<Demande> demandes;
    private int nbr;
}
