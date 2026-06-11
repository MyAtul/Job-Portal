package com.example.Job_portal.service;

import com.example.Job_portal.exception.JobNotFoundException;
import com.example.Job_portal.model.Jobs;
import com.example.Job_portal.repository.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobService {

    @Autowired
    JobRepo repo;

    public Jobs addJob(Jobs job) {
        return repo.save(job);
    }

    public List<Jobs> getJobs() {
        return  repo.findAll();
    }

    public Jobs updateJob(Integer id, Jobs job) {
        Jobs existingJob = repo.findById(id)
                .orElseThrow(()->
                new JobNotFoundException(
                        "Job with id " + id + " not found"
                ));

        if(existingJob != null){
            existingJob.setTitle(job.getTitle());
            existingJob.setCompany(job.getCompany());
            existingJob.setLocation(job.getLocation());
            existingJob.setSkills(job.getSkills());
            existingJob.setSalary(job.getSalary());
            existingJob.setDescription(job.getDescription());
            existingJob.setImgUrl(job.getImgUrl());

            return repo.save(existingJob);
        }
        return null;
    }

    public String deleteJob(Integer id) {
        Jobs job = repo.findById(id)
                        .orElseThrow(()->
                        new JobNotFoundException(
                                "Job with id " + id + " not found"
                        ));
        repo.delete(job);
        return "Successfully Deleted";
    }

    public Optional<Jobs> getJobById(Integer id) {
        return Optional.ofNullable(repo.findById(id).orElseThrow(() ->
                new JobNotFoundException("Job with id " + id + " not found")
        ));
    }

    public List<Jobs> findByTitle(String keyword) {
        return repo.findByTitleContainingIgnoreCase(keyword);
    }
}
