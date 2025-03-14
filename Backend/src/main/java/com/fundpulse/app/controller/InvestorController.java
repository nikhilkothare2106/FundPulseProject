package com.fundpulse.app.controller;

import com.fundpulse.app.forms.InvestorForm;
import com.fundpulse.app.forms.LoginRequest;
import com.fundpulse.app.models.Investor;
import com.fundpulse.app.service.InvestorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/investor")
public class InvestorController {


    @Autowired
    private InvestorService investorService;

    @PostMapping(value = "/signup", consumes = "multipart/form-data")
    public ResponseEntity<String> registerInvestor(@ModelAttribute InvestorForm investorForm) {
        System.out.println("Received request in registerInvestor()");
        System.out.println("Investor Email: " + investorForm.getEmail());
        return investorService.registerInvestor(investorForm);
    }

    @PostMapping("/login")
    public Investor LoginInvestor(@RequestBody LoginRequest loginRequest) {

        Investor investor = investorService.loginInvestor(loginRequest);
        return investor;

    }

}
