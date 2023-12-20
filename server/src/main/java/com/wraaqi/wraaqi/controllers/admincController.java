package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.AdminCommune;
import com.wraaqi.wraaqi.services.AdmincService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/adminc")
@CrossOrigin("http://localhost:5173")

@RequiredArgsConstructor
public class admincController {
    final AdmincService admincService;
    @GetMapping("/listOfAdminc")
    public List<AdminCommune> findAll(){
        return admincService.findAll();
    }
    @PostMapping("/saveAdminc")
    public AdminCommune saveAdminc(@RequestBody AdminCommune adminCommune){
        adminCommune.setEMPLOYED(new Date());
        return admincService.saveAdminc(adminCommune);
    }
    @DeleteMapping("/deleteById/{id}")
    public void deleteAdminc(@PathVariable("id") Long id){
         admincService.deleteAdminc(id);
    }
    @GetMapping("/numbreOfAmdincs")
    public long count(){
        return admincService.count();
    }
}
