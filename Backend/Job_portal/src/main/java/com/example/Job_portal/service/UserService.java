package com.example.Job_portal.service;

import com.example.Job_portal.dto.AuthRequest;
import com.example.Job_portal.dto.AuthResponse;
import com.example.Job_portal.model.User;
import com.example.Job_portal.repository.UserRepo;
import com.example.Job_portal.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private JwtUtil jwtUtil;

    public User register(User user){
        user.setPassword(encoder.encode(user.getPassword()));
        user.setRole("admin");
        return userRepo.save(user);
    }

    public AuthResponse login(AuthRequest request) {
        User user = userRepo.findByUsername(request.getUsername())
                .orElseThrow(() ->
                        new RuntimeException("user not found"));

        boolean isMatch = encoder.matches(
                request.getPassword(),
                user.getPassword()
        );

        if(!isMatch){
            throw new RuntimeException("Invalid Password");
        }

        String token = jwtUtil.generateToken(
                user.getUsername()
        );

        return new AuthResponse(token);
    }
}
