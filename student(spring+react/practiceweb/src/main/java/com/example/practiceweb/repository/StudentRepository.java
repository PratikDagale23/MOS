package com.example.practiceweb.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.practiceweb.model.Student;
@Repository
public interface StudentRepository extends JpaRepository<Student,Integer>// inherits the repo and the type of model and primary key
{

	List<Student> findByNameStartsWith(String name);

}

