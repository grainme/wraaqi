package com.wraaqi.wraaqi.models;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@ToString
@Table
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name="demand_type")
public class Demande {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    @Enumerated(EnumType.STRING)
    private Status status;
    private Date demendeDate;
    @ManyToOne
    private Fonctionnaire fonctionnaire;

}
