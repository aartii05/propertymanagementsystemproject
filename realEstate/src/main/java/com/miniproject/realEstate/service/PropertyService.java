package com.miniproject.realEstate.service;

import com.miniproject.realEstate.entity.Property;

import java.util.List;
import java.util.Optional;

public interface PropertyService {
    public String addProperty(Property property);
    public Optional<Property> getPropertyById(int id);
    public Property updateProperty(Property property);
    public String deleteProperty(int id);
    public Double getAveragePriceOfProperties();
   public List<Property> getPropertyByNoOfBedroomsAndBathrooms(Integer numberOfBedrooms, Integer numberOfBathrooms);
   public List<Property> getPropertiesInRange(double lowerPriceRange,double higherPriceRange);
   public List<Property> getAllProperties();

   //public List<Property> getPropertiesByBedrooms(Integer bedrooms);

}
