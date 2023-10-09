package com.miniproject.realEstate.entity;

import com.fasterxml.jackson.databind.annotation.JsonPOJOBuilder;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Positive;
import lombok.Builder;
import org.springframework.stereotype.Component;

import static jakarta.persistence.GenerationType.IDENTITY;

@Entity
@Component
@Table
@Builder
public class Property {
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue(strategy = IDENTITY)
    private int id;

    private String name;

    private String address;

    @Positive
    @Min(value = 0,message = "Price cannot be negative")
    private double price;


    @Positive(message = "Number of bedrooms should be positive")
    @Min(value = 1,message = "Enter atleast 1 bedroom ")
    private int numberOfBedrooms;

    @Positive(message = "Number of bathrooms should be positive")
    @Min(value = 1,message = "Enter atleast 1 bathroom")
    private int numberOfBathrooms;

    @Positive
    private double areaSquareFeet;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getNumberOfBedrooms() {
        return numberOfBedrooms;
    }

    public void setNumberOfBedrooms(int numberOfBedrooms) {
        this.numberOfBedrooms = numberOfBedrooms;
    }

    public int getNumberOfBathrooms() {
        return numberOfBathrooms;
    }

    public void setNumberOfBathrooms(int numberOfBathrooms) {
        this.numberOfBathrooms = numberOfBathrooms;
    }

    public double getAreaSquareFeet() {
        return areaSquareFeet;
    }

    public void setAreaSquareFeet(double areaSquareFeet) {
        this.areaSquareFeet = areaSquareFeet;
    }

    public Property(int id, String name, String address, double price, int numberOfBedrooms, int numberOfBathrooms, double areaSquareFeet) {
        this.name=name;
        this.id = id;
        this.address = address;
        this.price = price;
        this.numberOfBedrooms = numberOfBedrooms;
        this.numberOfBathrooms = numberOfBathrooms;
        this.areaSquareFeet = areaSquareFeet;
    }

    public Property() {
    }
}
