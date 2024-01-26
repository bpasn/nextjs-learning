import React from 'react'
import { getBrands } from '../action/queryBrand';
import { getCategories } from '../action/fetchCategories';
import FilterClient from './FilterClient';


const ProductFilterComponent = async () => {
    const categories = await getCategories();
    const brands = await getBrands();
    return (
        <FilterClient brands={brands} categories={categories} />
    )
}

export default ProductFilterComponent