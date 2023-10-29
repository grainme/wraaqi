package com.wraaqi.wraaqi.repositories;

import com.wraaqi.wraaqi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
