package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.AdminLogiciel;
import com.wraaqi.wraaqi.services.AdminLogicielService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:5173")

@RequestMapping("/adminl")
@RequiredArgsConstructor
public class AdminLogicielController {
    final AdminLogicielService adminLogicielService;
    @GetMapping
    public List<AdminLogiciel> findAll(){
        return adminLogicielService.findAll();
    }
    @PostMapping
    public AdminLogiciel saveAdminl(@RequestBody AdminLogiciel adminLogiciel){
        return adminLogicielService.saveAdminl(adminLogiciel);
    }
    @PutMapping
    public AdminLogiciel updateAdminl(@RequestBody AdminLogiciel adminLogiciel){
        return adminLogicielService.updateAdminl(adminLogiciel);
    }
    @GetMapping("/{id}")
    public Optional<AdminLogiciel> findById(@PathVariable("id") Long id){
        return adminLogicielService.findById(id);
    }
    @DeleteMapping("/{id}")
    public void deleteId(@PathVariable("id") Long id){
        adminLogicielService.deleteById(id);
    }
    @GetMapping("/numbreOfAmdinls")
    public long count(){
        return adminLogicielService.count();
    }
}
