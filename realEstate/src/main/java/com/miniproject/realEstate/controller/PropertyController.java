package com.miniproject.realEstate.controller;

import com.miniproject.realEstate.entity.Property;
import com.miniproject.realEstate.service.PropertyService;
import com.miniproject.realEstate.service.PropertyServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/property")
public class PropertyController {


    @Autowired
    private PropertyServiceImpl propertyService;


    @PostMapping("/add")
    public void addProperty(@RequestBody Property property){


        this.propertyService.addProperty(property);


    }

    @GetMapping("/find/{id}")
    public Optional<Property> getPropertyById(@PathVariable int id){
        return this.propertyService.getPropertyById(id);


    }

    @GetMapping("/find")
    public List<Property> getAllProperties(){
        return this.propertyService.getAllProperties();
    }

    @PutMapping("/update")
    public Property updateProperty(@RequestBody Property property){
        return propertyService.updateProperty(property);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProperty(@PathVariable int id){
        return this.propertyService.deleteProperty(id);

    }

    @GetMapping("/filter")
    public List<Property> getPropertyByBedroomsAndBathrooms(
            @RequestParam("bedrooms") Integer numberOfBedrooms,
            @RequestParam("bathrooms") Integer numberOfBathrooms
    ){
        return propertyService.getPropertyByNoOfBedroomsAndBathrooms(numberOfBedrooms,numberOfBathrooms);
    }
    @GetMapping("/averageprice")
    public Double getAveragePriceOfProperties(){
        return propertyService.getAveragePriceOfProperties();
    }
    @GetMapping("/priceinrange")
    public List<Property> getPropertiesInRange(
            @RequestParam("lowerPriceRange") double lowerPriceRange,
            @RequestParam("higherPriceRange") double higherPriceRange
    ){
        return propertyService.getPropertiesInRange(lowerPriceRange,higherPriceRange);
    }

}
