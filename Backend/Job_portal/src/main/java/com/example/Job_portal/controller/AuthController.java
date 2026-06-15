package com.example.Job_portal.controller;

import com.example.Job_portal.dto.AuthRequest;
import com.example.Job_portal.dto.AuthResponse;
import com.example.Job_portal.model.User;
import com.example.Job_portal.security.JwtUtil;
import com.example.Job_portal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:5173/")
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public User register(@RequestBody User user){
        return userService.register(user);
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request){
        return userService.login(request);
    }

    @GetMapping("/test")
    public String test(@RequestHeader("Authorization") String header){
        return jwtUtil.extractUsername(header);
    }
}
