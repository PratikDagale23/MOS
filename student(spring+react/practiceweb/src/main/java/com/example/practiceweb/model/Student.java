package com.example.practiceweb.model;// model package contains all entities

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Student {

	@Id // acts as primary key
	@GeneratedValue(strategy=GenerationType.IDENTITY) // generates unique ID
	private int ID;
	private String name;
	private String address;
	public Student() {
	}
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
}
