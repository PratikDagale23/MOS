package com.example.practiceweb.service;

import java.util.List;
import java.util.Optional;

import org.yaml.snakeyaml.events.Event.ID;

import com.example.practiceweb.model.Student;

public interface StudentService {
	public Student saveStudent(Student student);// saving details of student
	public List<Student> getAllStudents();
	public List<Student> findByName(String name);
	}
