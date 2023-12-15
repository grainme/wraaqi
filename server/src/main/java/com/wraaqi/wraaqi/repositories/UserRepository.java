package com.wraaqi.wraaqi.repositories;

import com.wraaqi.wraaqi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public User findByEmailAndPassword(String email, String password);
    public long count();
}
