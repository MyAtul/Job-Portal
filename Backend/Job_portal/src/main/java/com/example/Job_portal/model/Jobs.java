package com.example.Job_portal.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Jobs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotBlank(message = "Title is Required")
    private String title;

    @NotBlank(message = "Company Name Can't be empty")
    private String company;

    @NotBlank(message = "Skills Can't be empty")
    private String skills;

    @NotBlank(message = "Location field Can't be empty")
    private String location;

    @NotBlank(message = "Salary Can't be empty")
    private String salary;

    @NotBlank(message = "Image Can't be empty")
    private  String imgUrl;

    @Column(length = 2000)
    @NotBlank(message = "Description Can't be empty")
    private String description;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSalary() {
        return salary;
    }

    public void setSalary(String salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "Jobs{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", company='" + company + '\'' +
                ", skills='" + skills + '\'' +
                ", location='" + location + '\'' +
                ", salary='" + salary + '\'' +
                ", imgUrl='" + imgUrl + '\'' +
                ", description='" + description + '\'' +
                '}';
    }
}
