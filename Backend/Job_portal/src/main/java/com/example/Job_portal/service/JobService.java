package com.example.Job_portal.service;

import com.example.Job_portal.exception.JobNotFoundException;
import com.example.Job_portal.model.Jobs;
import com.example.Job_portal.repository.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

@Service
public class JobService {

    @Autowired
    JobRepo repo;

    public Jobs addJob(Jobs job) {
        return repo.save(job);
    }

    public List<Jobs> getJobs() {
        return repo.findAll();
    }


    public Jobs updateJob(Integer id, Jobs job) {
        Jobs existingJob = repo.findById(id)
                .orElseThrow(() ->
                        new JobNotFoundException(
                                "Job with id " + id + " not found"
                        ));
        existingJob.setTitle(job.getTitle());
        existingJob.setCompany(job.getCompany());
        existingJob.setLocation(job.getLocation());
        existingJob.setSkills(job.getSkills());
        existingJob.setSalary(job.getSalary());
        existingJob.setDescription(job.getDescription());
        existingJob.setImgUrl(job.getImgUrl());

        return repo.save(existingJob);
    }

    public String deleteJob(Integer id) {
        Jobs job = repo.findById(id)
                .orElseThrow(() ->
                        new JobNotFoundException(
                                "Job with id " + id + " not found"
                        ));
        repo.delete(job);
        return "Successfully Deleted";
    }

    public Jobs getJobById(Integer id) {
        return (repo.findById(id).orElseThrow(() ->
                new JobNotFoundException("Job with id " + id + " not found")
        ));
    }

    public List<Jobs> findByTitle(String keyword) {
        return repo.findByTitleContainingIgnoreCase(keyword);
    }

    public List<Jobs> findByLocation(String location) {
        return repo.findByLocationContainingIgnoreCase(location);
    }

    public List<Jobs> findBySkill(String skill) {
        return repo.findBySkillsContainingIgnoreCase(skill);
    }

    public List<Jobs> findBySalary(Integer salary) {
        return repo.findBySalaryGreaterThanEqual(salary);
    }

    public List<Jobs> findByCompany(String company) {
        return repo.findByCompanyContainingIgnoreCase(company);
    }

    public List<Jobs> sortByTitle() {
        return repo.findAll(Sort.by("title"));
    }

    public List<Jobs> sortByLocation() {
        return repo.findAll(Sort.by("location"));
    }

    public List<Jobs> sortByCompany() {
        return repo.findAll(Sort.by("company"));
    }

    public List<Jobs> sortBySalary() {
        return repo.findAll(Sort.by("salary"));
    }

    public Page<Jobs> getJobWithPagination(int page, int size, String sortBy) {

        List<String> validField = List.of(
                "id",
                "title",
                "company",
                "salary",
                "location"
        );

        if (!validField.contains(sortBy)) {
            throw new IllegalArgumentException(
                    "Invalid sort Filed " + sortBy
            );
        }

        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return repo.findAll(pageable);
    }

    public long getJobCount() {
        return repo.count();
    }

    public List<Jobs> filterJobs(String location, String skill, Integer salary, String company, String sortBy) {
        List<Jobs> jobs = repo.findAll();

        if (location != null && !location.isBlank()) {
            jobs = jobs.stream()
                    .filter(job ->
                            job.getLocation() != null &&
                                    job.getLocation()
                                            .toLowerCase().contains(location.toLowerCase())).
                    toList();
        }

        if (skill != null && !skill.isBlank()) {
            jobs = jobs.stream()
                    .filter(job ->
                            job.getSkills() != null &&
                                    job.getSkills()
                                            .toLowerCase().contains(skill.toLowerCase()))
                    .toList();
        }

        if (salary != null) {
            jobs = jobs.stream()
                    .filter(job -> job.getSalary() >= salary)
                    .toList();
        }

        if (company != null && !company.isBlank()) {
            jobs = jobs.stream()
                    .filter(job ->
                            job.getCompany() != null &&
                                    job.getCompany().toLowerCase()
                                            .contains(company.toLowerCase()))
                    .toList();
        }

        switch (sortBy) {
            case "title" -> jobs = jobs.stream()
                    .sorted(Comparator.comparing(Jobs::getTitle))
                    .toList();

            case "location" -> jobs = jobs.stream()
                    .sorted(Comparator.comparing(Jobs::getLocation))
                    .toList();

            case "company" -> jobs = jobs.stream()
                    .sorted(Comparator.comparing(Jobs::getCompany))
                    .toList();
        }
        return jobs;
    }

    public List<String> getLocations() {
        return repo.findAll()
                .stream()
                .map(Jobs::getLocation)
                .distinct()
                .sorted()
                .toList();
    }

    public List<String> getCompanies() {
        return repo.findAll()
                .stream()
                .map(Jobs::getCompany)
                .distinct()
                .sorted()
                .toList();
    }

    public List<String> getSkills() {
        return repo.findAll()
                .stream()
                .flatMap(job ->
                        Arrays.stream(job.getSkills().split(",")))
                .map(String::trim)
                .distinct()
                .sorted()
                .toList();
    }

}