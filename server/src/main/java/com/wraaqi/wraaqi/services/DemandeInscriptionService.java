package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.DemandeInscription;
import com.wraaqi.wraaqi.repositories.DemandeInscriptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DemandeInscriptionService {
    final DemandeInscriptionRepository demandeInscriptionRepository;

    public DemandeInscription saveDemandeInscription(DemandeInscription demandeInscription) {
        return demandeInscriptionRepository.save(demandeInscription);
    }
    public List<DemandeInscription> findAll(){
        return demandeInscriptionRepository.findAll();
    }
    public Optional<DemandeInscription> findDemandeInsById(long id){
        return demandeInscriptionRepository.findById(id);
    }
    public DemandeInscription updateDemandeInsc(DemandeInscription inscription){
        return demandeInscriptionRepository.save(inscription);
    }

}
