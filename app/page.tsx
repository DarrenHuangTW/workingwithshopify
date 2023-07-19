import Image from 'next/image'
import { getProductsInCollection } from "../lib/shopify"

export default function Home(products: any) {
  console.log(products)
  console.log("test")
  return (
    <div>
      Hello from Darren!
    </div>
  )
}


export async function getStaticProps() {
  const products = await getProductsInCollection()


  return {
    props: {products}
  }

}
