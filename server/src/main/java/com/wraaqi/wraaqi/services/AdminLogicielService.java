package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.AdminLogiciel;
import com.wraaqi.wraaqi.repositories.AdminLogicielRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminLogicielService {
    final AdminLogicielRepository adminLogicielRepository;
    public List<AdminLogiciel> findAll(){
        return adminLogicielRepository.findAll();
    }
    public AdminLogiciel saveAdminl(AdminLogiciel adminLogiciel){
        return adminLogicielRepository.save(adminLogiciel);
    }
    public AdminLogiciel updateAdminl(AdminLogiciel adminLogiciel){
        return adminLogicielRepository.save(adminLogiciel);
    }
    public Optional<AdminLogiciel> findById(Long id){
        return adminLogicielRepository.findById(id);
    }
    public void deleteById(Long id){
        adminLogicielRepository.deleteById(id);
    }
    public long count(){return adminLogicielRepository.count();}
}
