package com.wraaqi.wraaqi.controllers;

import com.wraaqi.wraaqi.models.EmailBody;
import com.wraaqi.wraaqi.services.EmailSenderService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sendEmail")
@CrossOrigin("http://localhost:5173")
@RequiredArgsConstructor
public class EmailController {
    final EmailSenderService emailSenderService;
    @PostMapping
    public void sendEmail(@RequestBody EmailBody emailBody){
        emailSenderService.sendSimpleMessage(emailBody.getTo(),emailBody.getSubject(),emailBody.getMessage());
    }
}
