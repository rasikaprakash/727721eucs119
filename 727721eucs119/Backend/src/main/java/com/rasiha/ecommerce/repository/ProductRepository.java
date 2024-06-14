package com.rasiha.ecommerce.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rasiha.ecommerce.model.Product;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategoryAndPriceBetween(String category, double minPrice, double maxPrice);
    Product findByUniqueId(String uniqueId);
}