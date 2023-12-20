package com.wraaqi.wraaqi.repositories;

import com.wraaqi.wraaqi.models.AdminLogiciel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminLogicielRepository extends JpaRepository<AdminLogiciel,Long> {
    long count();
}
