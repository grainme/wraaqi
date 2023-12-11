
package com.wraaqi.wraaqi.models;

import jakarta.persistence.*;

@DiscriminatorValue("AEC")
public class AgentEtatCivil extends Fonctionnaire{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="numero")
    private Long id ;
}
