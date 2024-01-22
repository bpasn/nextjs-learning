import { delay } from "@/lib/utils"
import CartClient from "./component/client"

const CartPage = async () => {
  await delay(5 * 1000)
  return (
    <CartClient />
  )
}

export default CartPage