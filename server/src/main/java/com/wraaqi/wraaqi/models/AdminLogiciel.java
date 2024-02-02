package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
@Table
public class AdminLogiciel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id ;
    @Temporal(TemporalType.DATE)
    private Date EMPLOYED;
    @OneToOne
    @JoinColumn(name = "id_user")
    private User user;
}
