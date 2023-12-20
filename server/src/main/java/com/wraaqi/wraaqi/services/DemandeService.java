package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.Demande;
import com.wraaqi.wraaqi.repositories.DemandeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DemandeService {
    final DemandeRepository demandeRepository;
    public List<Demande> findAll(){
        return demandeRepository.findAll();
    }

}
