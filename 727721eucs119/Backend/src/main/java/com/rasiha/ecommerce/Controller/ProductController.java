package com.rasiha.ecommerce.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.rasiha.ecommerce.RequestDTO.CategoryRequest;
import com.rasiha.ecommerce.Service.ProductService;
import com.rasiha.ecommerce.model.Product;

import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@RestController
@RequestMapping("/categories")
public class ProductController {
    @Autowired
    private ProductService productService;

    // @GetMapping("/{categoryname}/products")
    // public List<Product> getTopProducts(
    //         @PathVariable String categoryname,
    //         @RequestParam int n,
    //         @RequestParam(defaultValue = "1") int page,
    //         @RequestParam(defaultValue = "price") String sortBy,
    //         @RequestParam(defaultValue = "asc") String order,
    //         @RequestParam(defaultValue = "0") double minPrice,
    //         @RequestParam(defaultValue = "1000000") double maxPrice) {
    //     return productService.getTopProducts(categoryname, n, page, sortBy, order, minPrice, maxPrice);
    // }



    @GetMapping("/products/{pageno}")
    public List<Product> findByCategoryAndPrice(@PathVariable int pageno, @RequestBody CategoryRequest req) {
        return productService.getTopProducts(req.getCategoryname(), 10, pageno,"price", "asc", req.getMinPrice(), req.getMaxPrice());
    }
    

    // @GetMapping("/{categoryname}/products/{productid}")
    // public Product getProductDetails(
    //         @PathVariable String categoryname,
    //         @PathVariable String productid) {
    //     return productService.getProductDetails(productid);
    // }

    @PostMapping("/addAll")
    public List<Product> addProducts(@RequestBody List<Product> products) {
        //TODO: process POST request
        
        return productService.addProducts(products);
    }
    
}