package com.text.spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.text.spring.model.VehicleModel;

public interface VehicleRepository extends JpaRepository<VehicleModel,Long> {

}
