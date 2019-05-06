package com.bierrophile.bierrophile.dao;

import com.bierrophile.bierrophile.model.Bierre;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BierreDao extends JpaRepository<Bierre, Integer> {

    List<Bierre> findByType(String type);

}
