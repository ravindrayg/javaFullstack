package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Owner;

public interface OwnerRepository extends JpaRepository<Owner,Integer> {
}
