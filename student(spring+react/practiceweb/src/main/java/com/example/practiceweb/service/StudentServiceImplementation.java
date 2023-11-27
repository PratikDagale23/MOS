package com.example.practiceweb.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.events.Event.ID;

import com.example.practiceweb.model.Student;
import com.example.practiceweb.repository.StudentRepository;
@Service
public class StudentServiceImplementation implements StudentService{

	@Autowired
	private StudentRepository studentRepository;// injects our repository in our service class
	@Override
	public Student saveStudent(Student student) {
		// TODO Auto-generated method stub
		return studentRepository.save(student);
	}
	@Override
	public List<Student> getAllStudents() {
		// TODO Auto-generated method stub
		return studentRepository.findAll();
	}
	@Override
	public List<Student> findByName(String name) {
		// TODO Auto-generated method stub
		return studentRepository.findByNameStartsWith(name);
	}
	}
