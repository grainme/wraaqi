package com.wraaqi.wraaqi.repositories;

import com.wraaqi.wraaqi.models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    public User findByEmailAndPassword(String email,String password);
    public User findByEmailAndCin(String email,String cin);
    long count();
    @Query("SELECT u.adresse.ville, COUNT(u) FROM User u GROUP BY u.adresse.ville")
    public List<Object[]> countUsersByVille();
}
