package com.example.practiceweb.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Walmart")
public class grocery {
	
	public grocery() {
	}
	@Id
	private int id;
	private String grocery_name;
	private String type;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getGrocery_name() {
		return grocery_name;
	}
	public void setGrocery_name(String grocery_name) {
		this.grocery_name = grocery_name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	
}
