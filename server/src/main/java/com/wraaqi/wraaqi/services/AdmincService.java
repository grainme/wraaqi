package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.AdminCommune;
import com.wraaqi.wraaqi.repositories.AdmincRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class AdmincService {
    final AdmincRepository admincRepository;

    public List<AdminCommune> findAll(){
        return admincRepository.findAll();
    }
    public Optional<AdminCommune> findAdmin(Long id){
        return admincRepository.findById(id);
    }
    public AdminCommune saveAdminc(AdminCommune adminCommune){
        return admincRepository.save(adminCommune);
    }
    public void deleteAdminc(Long id){
        admincRepository.deleteById(id);
    }
    public long count(){return admincRepository.count();}
}
