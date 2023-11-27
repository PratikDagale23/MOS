package com.example.practiceweb.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.practiceweb.model.Student;
import com.example.practiceweb.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin // tells springboot to connect two apps - react and Spring
public class StudentController {
	@Autowired
	private StudentService studentService;
	
	@PostMapping("/add")
	public String add(@RequestBody Student student) {
		studentService.saveStudent(student);
		return "New student added";
	}
	@GetMapping("/getAll")
	public List<Student> getAllStudents()
	{
		return studentService.getAllStudents();
	}
	@GetMapping("/getByName")
	public List<Student> getbyName(@RequestParam("name") String name)// pass the parameter in the URL itself
	// pass the value like this - localhost:8080/student/getByName?name=Avish
	{
		return studentService.findByName(name);

}
}
