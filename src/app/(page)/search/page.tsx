import React from 'react'
import SearchClient from './component/client';

interface SearchPageProps {
    searchParams: {
        name: string;
        categoryId: string;
    }
}

const SearchPage = async ({
    searchParams
}: SearchPageProps) => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=${searchParams.categoryId}${searchParams.name ? `&title=${searchParams.name}` : ''}`);
    const result = await response.json();
    return (
        <>
            <h1 className='text-2xl font-medium mt-10 mb-10'>{result.length && result[0].category.name}</h1>
            <div className="grid grid-cols-4 gap-5 ">
                <SearchClient product={result} />
            </div>
        </>

    )
}

export default SearchPage