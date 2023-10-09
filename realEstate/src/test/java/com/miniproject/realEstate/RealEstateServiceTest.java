package com.miniproject.realEstate;


import com.miniproject.realEstate.entity.Property;
import com.miniproject.realEstate.repository.RealEstateRepository;
import com.miniproject.realEstate.service.PropertyService;
import com.miniproject.realEstate.service.PropertyServiceImpl;
import jakarta.transaction.Transactional;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

@Transactional
@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class RealEstateServiceTest {


   @Mock
   private RealEstateRepository realEstateRepository;

    @InjectMocks
    private PropertyServiceImpl propertyService;

    @Test
    public void testAddProperty(){
        Property property1=Property.builder()
                .address("Pune")
                .price(50000)
                .numberOfBedrooms(1)
                .numberOfBathrooms(1)
                .areaSquareFeet(32.9)
                .build();
        System.out.println(property1);


        when(realEstateRepository.save(Mockito.any(Property.class))).thenReturn(property1);
        String savedProperty=propertyService.addProperty(property1);
        System.out.println(savedProperty);
        Assertions.assertThat("Property added successfully");




    }

    @Test
    public void testGetPropertyById(){
        Property savedProperty = Property.builder()
                .id(9999)
                .address("Mumbai")
                .price(90000)
                .numberOfBedrooms(2)
                .numberOfBathrooms(2)
                .areaSquareFeet(42.9)
                .build();
        when(realEstateRepository.findById(anyInt())).thenReturn(Optional.ofNullable(savedProperty));
        Optional<Property> property = propertyService.getPropertyById(savedProperty.getId());
        assertEquals(Optional.of(savedProperty), property);
    }

    @Test
    public void testUpdateProperty(){
        Property updatedProperty = Property.builder()
                .id(9999)
                .address("Mumbai")
                .price(90000)
                .numberOfBedrooms(2)
                .numberOfBathrooms(2)
                .areaSquareFeet(42.9)
                .build();
        when(realEstateRepository.existsById(anyInt())).thenReturn(true);
        when(realEstateRepository.save(any(Property.class))).thenReturn(updatedProperty);
        Property response  = propertyService.updateProperty(updatedProperty);
        assertEquals(updatedProperty, response);
    }



    @Test
    public void deleteProperty(){
        Property propertyToBeDeleted= Property.builder()
                .id(8888)
                .address("Mumbai")
                .price(90000)
                .numberOfBedrooms(2)
                .numberOfBathrooms(2)
                .areaSquareFeet(42.9)
                .build();
        int idToDelete=8888;
        //Mockito.doNothing().when(realEstateRepository).deleteById();
        propertyService.deleteProperty(idToDelete);
        verify(realEstateRepository,times(1)).deleteById(idToDelete);





    }

    @Test
    public void testGetAllProperties(){
        Property p1 = Property.builder()
                .id(9999)
                .address("Mumbai")
                .price(90000)
                .numberOfBedrooms(2)
                .numberOfBathrooms(2)
                .areaSquareFeet(42.9)
                .build();

        Property p2 = Property.builder()
                .id(2222)
                .address("Nagpur")
                .price(90000)
                .numberOfBedrooms(1)
                .numberOfBathrooms(1)
                .areaSquareFeet(62.9)
                .build();


        List<Property> properties=new ArrayList<>();
        properties.add(p1);
        properties.add(p2);

        when(realEstateRepository.findAll()).thenReturn(properties);
        List<Property> response=propertyService.getAllProperties();
        assertEquals(properties.size(),response.size());

    }





}
