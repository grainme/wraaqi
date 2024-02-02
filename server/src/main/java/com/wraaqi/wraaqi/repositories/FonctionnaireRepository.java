package com.wraaqi.wraaqi.repositories;

import com.wraaqi.wraaqi.models.Fonctionnaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface FonctionnaireRepository extends JpaRepository<Fonctionnaire, Long> {
    @Query(value = "SELECT f FROM Fonctionnaire f WHERE f.nbr = (SELECT MIN(f2.nbr) FROM Fonctionnaire f2)")
    public List<Fonctionnaire> findMinFontionnaire();
    long count();
}
