package com.example.Job_portal.controller;

import com.example.Job_portal.model.Jobs;
import com.example.Job_portal.service.JobService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin(origins = "http://localhost:5173/")
@RestController
public class JobController {

    @Autowired
    JobService jobService;

    @PostMapping("/jobs")
    public Jobs addJob(@Valid @RequestBody Jobs job){
        return jobService.addJob(job);
    }

    @GetMapping("/jobs")
    public List<Jobs> getJob(){
        return jobService.getJobs();
    }

    @PutMapping("/jobs/{id}")
    public Jobs updateJob(@PathVariable Integer id,@Valid @RequestBody Jobs job){
        return jobService.updateJob(id,job);
    }

    @DeleteMapping("/jobs/{id}")
    public String deleteJob(@PathVariable Integer id){
        return jobService.deleteJob(id);
    }

    @GetMapping("/jobs/{id}")
    public Jobs getJob(@PathVariable Integer id){
        return jobService.getJobById(id);
    }

    @GetMapping("/jobs/search")
    public List<Jobs> getJobByTitle(@RequestParam String keyword){
        return jobService.findByTitle(keyword);
    }

    @GetMapping("/jobs/page")
    public Page<Jobs> getJobWithPagination(@RequestParam(defaultValue = "0") int page,
                                           @RequestParam(defaultValue = "5") int size,
                                           @RequestParam(defaultValue = "id") String sortBy)
    {
        return jobService.getJobWithPagination(page,size,sortBy);
    }

    @GetMapping("/jobs/location")
    public List<Jobs> filterJobByLocation(@RequestParam String location){
        return jobService.findByLocation(location);
    }

    @GetMapping("/jobs/skill")
    public List<Jobs> filterJobBySkill(@RequestParam String skill){
        return jobService.findBySkill(skill);
    }

    @GetMapping("/jobs/salary")
    public List<Jobs> filterJobBySalary(@RequestParam Integer salary){
        return jobService.findBySalary(salary);
    }

    @GetMapping("/jobs/company")
    public List<Jobs> filterJobByCompany(@RequestParam String company){
        return jobService.findByCompany(company);
    }

    @GetMapping("/jobs/sort/title")
    public List<Jobs> sortByTitle(){
        return jobService.sortByTitle();
    }

    @GetMapping("/jobs/sort/location")
    public List<Jobs> sortByLocation(){
        return jobService.sortByLocation();
    }

    @GetMapping("/jobs/sort/company")
    public List<Jobs> sortByCompany(){
        return jobService.sortByCompany();
    }

    @GetMapping("/jobs/sort/salary")
    public  List<Jobs> sortBySalary(){
        return jobService.sortBySalary();
    }

    @GetMapping("/jobs/count")
    public long getJobCount(){
        return jobService.getJobCount();
    }

    @GetMapping("/jobs/filter")
    public List<Jobs> filterJobs(
            @RequestParam (required = false) String location,
            @RequestParam(required = false) String skill,
            @RequestParam(required = false) Integer salary,
            @RequestParam(required = false) String company,
            @RequestParam(defaultValue = "id") String sortBy
    ){
        return jobService.filterJobs(location,skill,salary,company,sortBy);
    }

    //For getting all the options in the filter dropdown

    @GetMapping("/jobs/locations")
    public List<String> getLocations(){
        return jobService.getLocations();
    }

    @GetMapping("/jobs/companies")
    public List<String> getCompanies(){
        return jobService.getCompanies();
    }

    @GetMapping("/jobs/skills")
    public List<String> getSkills(){
        return jobService.getSkills();
    }


}
