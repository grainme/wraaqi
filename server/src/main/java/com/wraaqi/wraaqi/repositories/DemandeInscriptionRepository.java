package com.wraaqi.wraaqi.repositories;

import com.wraaqi.wraaqi.models.DemandeInscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DemandeInscriptionRepository extends JpaRepository<DemandeInscription, Long> {

    long count();
}
