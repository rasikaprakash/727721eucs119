package com.rasiha.ecommerce.RequestDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryRequest {

    String categoryname;
    double minPrice;
    double maxPrice;

}
