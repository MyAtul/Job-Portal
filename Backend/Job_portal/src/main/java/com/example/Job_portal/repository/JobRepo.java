package com.example.Job_portal.repository;

import com.example.Job_portal.model.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepo extends JpaRepository<Jobs,Integer> {
    List<Jobs> findByTitleContainingIgnoreCase(String keyword);
    List<Jobs> findByLocationContainingIgnoreCase(String location);
    List<Jobs> findBySkillsContainingIgnoreCase(String skills);
    List<Jobs> findBySalaryContainingIgnoreCase(String salary);
    List<Jobs> findByCompanyContainingIgnoreCase(String company);

}
