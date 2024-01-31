import React, { Suspense } from 'react'
import CategoriesForm from '../component/CategoriesForm'

const CategoriesPage = async ({
    params
}: {
    params: {
        categoriesId: string
    }
}) => {
    
    return (
        <Suspense fallback={(
            <>.....Loading</>
        )}>
            <CategoriesForm />
        </Suspense>
    )
}

export default CategoriesPage