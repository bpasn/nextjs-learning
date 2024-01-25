import { delay } from "@/lib/utils"
import ProductFilterClient from "./component/client"

const ProductFilter = async () => {
    return (
        <div className="container">
            <ProductFilterClient />
        </div>
    )
}

export default ProductFilter