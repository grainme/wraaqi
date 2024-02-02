package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.DemandeInscription;
import com.wraaqi.wraaqi.models.Fonctionnaire;
import com.wraaqi.wraaqi.models.Status;
import com.wraaqi.wraaqi.services.DemandeInscriptionService;
import com.wraaqi.wraaqi.services.FonctionnaireService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/demandeInscription")
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class DemandeInscriptionControllers {

    final DemandeInscriptionService demandeInscriptionService;
    final FonctionnaireService fonctionnaireService;



    @GetMapping
    public List<DemandeInscription> findAll(){
        return demandeInscriptionService.findAll();
    }
    @PostMapping
    public DemandeInscription saveDemandeInscription(@RequestBody DemandeInscription demandeInscription){
        demandeInscription.setFonctionnaire(fonctionnaireService.findFontionnaireByminNbr());
        demandeInscription.setStatus(Status.TODO);
        Fonctionnaire fonctionnaire=fonctionnaireService.findFontionnaireByminNbr();
        fonctionnaire.setNbr(fonctionnaire.getNbr()+1);
        fonctionnaireService.updateFonctionnaire(fonctionnaire);
        return demandeInscriptionService.saveDemandeInscription(demandeInscription);
    }
    @PutMapping("/updateStatusDoing/{id}")
    public ResponseEntity<DemandeInscription> updateStatusDoing(@PathVariable("id") long id) {
        Optional<DemandeInscription> optionalDemandeInscription = demandeInscriptionService.findDemandeInsById(id);

        if (optionalDemandeInscription.isPresent()) {
            DemandeInscription demandeInscription = optionalDemandeInscription.get();
            demandeInscription.setStatus(Status.DOING);

            DemandeInscription updatedInscription = demandeInscriptionService.updateDemandeInsc(demandeInscription);
            return ResponseEntity.ok(updatedInscription);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/updateStatusDone/{id}")
    public ResponseEntity<DemandeInscription> updateStatusDone(@PathVariable("id") long id) {
        Optional<DemandeInscription> optionalDemandeInscription = demandeInscriptionService.findDemandeInsById(id);

        if (optionalDemandeInscription.isPresent()) {
            DemandeInscription demandeInscription = optionalDemandeInscription.get();
            demandeInscription.setStatus(Status.DONE);

            DemandeInscription updatedInscription = demandeInscriptionService.updateDemandeInsc(demandeInscription);
            Fonctionnaire fonctionnaire =updatedInscription.getFonctionnaire();
            fonctionnaire.setNbr(fonctionnaire.getNbr()-1);
            fonctionnaireService.updateFonctionnaire(fonctionnaire);
            return ResponseEntity.ok(updatedInscription);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
