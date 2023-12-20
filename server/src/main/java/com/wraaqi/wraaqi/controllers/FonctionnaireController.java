package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.Fonctionnaire;
import com.wraaqi.wraaqi.services.FonctionnaireService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/fonctionnaire")
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class FonctionnaireController {

    final FonctionnaireService fonctionnaireService;

    @PostMapping("/saveFonctionnaire")
    public Fonctionnaire saveFonctionnaire(@RequestBody Fonctionnaire fonctionnaire) {
        return fonctionnaireService.saveFonctionnaire(fonctionnaire);
    }

    @GetMapping("/listOfFonctionnaire")
    public List<Fonctionnaire> findAllFonctionnaires(){
        return fonctionnaireService.findAll();
    }
    @GetMapping("/numbreOfFonctionnaire")
    public long count(){
        return fonctionnaireService.count();
    }
    @DeleteMapping("/deleteFonctionnaire/{id}")
    public void deleteFonctionnaireById(@PathVariable("id") long id){
        fonctionnaireService.deleteFonctionnaire(id);
    }

}
