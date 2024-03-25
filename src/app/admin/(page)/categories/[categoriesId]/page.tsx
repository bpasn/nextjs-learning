import CategoriesForm from '../ui/CategoriesForm'
import { getCategory } from '../action'

const CategoriesPage = async ({
    params
}: {
    params: {
        categoriesId: number
    }
}) => {
    const category = await getCategory(params.categoriesId)
    return (
        <CategoriesForm categories={category}/>
    )
}

export default CategoriesPage