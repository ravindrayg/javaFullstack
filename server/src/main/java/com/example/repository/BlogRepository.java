package com.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.entity.Blog;

public interface BlogRepository extends JpaRepository<Blog, Integer> {
}
