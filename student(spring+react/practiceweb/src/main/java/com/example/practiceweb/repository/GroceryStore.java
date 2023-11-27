package com.example.practiceweb.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.practiceweb.model.grocery;

public interface GroceryStore extends JpaRepository<grocery,Integer> {

}
