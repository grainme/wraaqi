package com.wraaqi.wraaqi.repositories;

import com.wraaqi.wraaqi.models.Demande;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DemandeRepository extends JpaRepository<Demande,Long> {
}
