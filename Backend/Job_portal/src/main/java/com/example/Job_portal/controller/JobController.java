package com.example.Job_portal.controller;

import com.example.Job_portal.model.Jobs;
import com.example.Job_portal.service.JobService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
public class JobController {

    @Autowired
    JobService jobService;

    @PostMapping("/jobs")
    private Jobs addJob(@Valid @RequestBody Jobs job){
        return jobService.addJob(job);
    }

    @GetMapping("/jobs")
    private List<Jobs> getJob(){
        return jobService.getJobs();
    }

    @PutMapping("/jobs/{id}")
    private Jobs updateJob(@PathVariable Integer id,@Valid @RequestBody Jobs job){
        return jobService.updateJob(id,job);
    }

    @DeleteMapping("/jobs/{id}")
    private String deleteJob(@PathVariable Integer id){
        return jobService.deleteJob(id);
    }

    @GetMapping("/jobs/{id}")
    private Optional<Jobs> getJob(@PathVariable Integer id){
        return jobService.getJobById(id);
    }

    @GetMapping("/jobs/search")
    private List<Jobs> getJobByTitle(@RequestParam String keyword){
        return jobService.findByTitle(keyword);
    }
}
