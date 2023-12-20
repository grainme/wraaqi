package com.wraaqi.wraaqi.services;

import com.wraaqi.wraaqi.models.Fonctionnaire;
import com.wraaqi.wraaqi.repositories.FonctionnaireRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FonctionnaireService {
    final FonctionnaireRepository fonctionnaireRepository;

    public List<Fonctionnaire> findAll(){
        return fonctionnaireRepository.findAll();
    }
    public Fonctionnaire saveFonctionnaire(Fonctionnaire fonctionnaire){
        return  fonctionnaireRepository.save(fonctionnaire);
    }
    public Optional<Fonctionnaire> findById(Long id){
        return fonctionnaireRepository.findById(id);
    }
    public Fonctionnaire updateFonctionnaire(Fonctionnaire fonctionnaire){
        return fonctionnaireRepository.save(fonctionnaire);
    }
    public void deleteFonctionnaire(Long id){
        fonctionnaireRepository.deleteById(id);
    }
    public Fonctionnaire findFontionnaireByminNbr(){
        return fonctionnaireRepository.findMinFontionnaire().get(0);
    }
   public long count(){return fonctionnaireRepository.count();}


}
