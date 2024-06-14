package com.rasiha.ecommerce.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.rasiha.ecommerce.model.Product;
import com.rasiha.ecommerce.repository.ProductRepository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public List<Product> getTopProducts(String category, int n, int page, String sortBy, String order, double minPrice, double maxPrice) {
        Sort sort = Sort.by(Sort.Direction.fromString(order), sortBy);
        PageRequest pageRequest = PageRequest.of(page - 1, n, sort);
        return productRepository.findByCategoryAndPriceBetween(category, minPrice, maxPrice).stream()
                .skip((long) (page - 1) * n)
                .limit(n)
                .peek(product -> product.setUniqueId(UUID.randomUUID().toString()))
                .collect(Collectors.toList());
    }

    public Product getProductDetails(String uniqueId) {
        return productRepository.findByUniqueId(uniqueId);
    }

    public List<Product> addProducts(List<Product> products){
        return productRepository.saveAll(products);
    }
}