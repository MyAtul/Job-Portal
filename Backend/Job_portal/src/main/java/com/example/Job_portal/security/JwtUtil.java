package com.example.Job_portal.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;
import javax.crypto.SecretKey;
import javax.swing.*;
import java.util.Date;

@Component
public class JwtUtil {

    private static final String SECRET = "mysecretusefortheencryptionanddecryption";

    private final SecretKey key = Keys.hmacShaKeyFor(SECRET.getBytes());
    public String generateToken(String username,String role) {
        return Jwts.builder()
                .subject(username)
                .claim("role",role)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + 1000*60*60))
                .signWith(key)
                .compact();
    }

    public String extractUsername(String token){
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .getSubject();
    }

    public String extractRole(String token){
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload()
                .get("role", String.class);
    }

    public boolean validateToken(String token,String username){
        return extractUsername(token).equals(username);
    }
}
