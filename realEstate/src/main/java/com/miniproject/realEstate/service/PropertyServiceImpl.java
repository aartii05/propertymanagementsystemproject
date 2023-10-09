package com.miniproject.realEstate.service;

import com.miniproject.realEstate.entity.Property;
import com.miniproject.realEstate.repository.RealEstateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PropertyServiceImpl implements PropertyService {

    @Autowired
    private RealEstateRepository realEstateRepository;


    @Override
    public String addProperty(Property property) {
        this.realEstateRepository.save(property);
        return "Property added successfully";
    }

    @Override
    public Optional<Property> getPropertyById(int id) {

        return realEstateRepository.findById(id);
    }

    @Override
    public Property updateProperty(Property property) {
        Property updatedProperty = null;
        if (realEstateRepository.existsById(property.getId())) {
            updatedProperty = realEstateRepository.save(property);
        }
        return updatedProperty;
    }

    @Override
    public String deleteProperty(int id) {
        this.realEstateRepository.deleteById(id);
        return "Property Id:" + id + "has been deleted";
    }

    @Override
    public Double getAveragePriceOfProperties() {
        List<Property> properties = realEstateRepository.findAll();
        if (properties.isEmpty()) {
            return 0.0;
        }
        double total = properties.stream()
                .mapToDouble(Property::getPrice)
                .sum();

        return total/properties.size();
    }




    @Override
    public List<Property> getPropertyByNoOfBedroomsAndBathrooms(Integer numberOfBedrooms, Integer numberOfBathrooms) {
        return realEstateRepository.findAll()
                .stream()
                .filter(property->property.getNumberOfBedrooms()==numberOfBedrooms &&
                        property.getNumberOfBathrooms()==numberOfBathrooms)
                .collect(Collectors.toList());
    }

    @Override
    public List<Property> getPropertiesInRange(double lowerPriceRange, double higherPriceRange) {
        return realEstateRepository.findByPriceBetween(lowerPriceRange,higherPriceRange);
    }


    @Override
    public List<Property> getAllProperties() {

        return this.realEstateRepository.findAll();
    }
    

//    @Override
//    public List<Property> getPropertiesByBedrooms(Integer bedrooms) {
//        return realEstateRepository.findByBedrooms(bedrooms);
//    }




}
