package com.example.Job_portal.security;

import com.example.Job_portal.service.CustomUserDetailService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private CustomUserDetailService customUserDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain
    ) throws ServletException, IOException
    {
        System.out.println("JwtFilter Executed");
        String path = request.getRequestURI();
        if(path.startsWith("/auth")){
            filterChain.doFilter(request,response);
            return;
        }
        String header = request.getHeader("Authorization");
        System.out.println("Header = " + header);
        if(header != null &&
                header.startsWith("Bearer ")) {
            try {
                String token = header.substring(7);
                System.out.println("token : "+token);

                String username = jwtUtil.extractUsername(token);
                System.out.println("username "+username);

                UserDetails userDetails = customUserDetailService.loadUserByUsername(username);

                if (jwtUtil.validateToken(token, username)) {
                    UsernamePasswordAuthenticationToken authToken =
                            new UsernamePasswordAuthenticationToken(
                                    userDetails, null, userDetails.getAuthorities());

                    SecurityContextHolder.getContext().setAuthentication(authToken);

                    System.out.println("Authenticated User : " + username);
                }
            }
            catch (Exception e){
                logger.warn("Invalid token ",e);
            }

        }
        filterChain.doFilter(request, response);
    }
}
