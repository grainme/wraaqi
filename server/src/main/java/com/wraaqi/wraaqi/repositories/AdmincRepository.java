package com.wraaqi.wraaqi.repositories;

import com.wraaqi.wraaqi.models.AdminCommune;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdmincRepository extends JpaRepository<AdminCommune,Long> {
    long count();
}
