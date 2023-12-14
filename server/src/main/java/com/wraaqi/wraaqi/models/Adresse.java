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
@Embeddable
public class Adresse {
    private int  num;
    private String rue;
    private String  ville;
    private String  residence;


}
