package com.miniproject.realEstate.repository;

import com.miniproject.realEstate.entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RealEstateRepository extends JpaRepository<Property,Integer> {

    List<Property> findByPriceBetween(double lowerPriceRange,double higherPriceRange);
    //List<Property> findByBedrooms(Integer bedrooms);
}
