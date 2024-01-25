import React from 'react'
const fetchData = async (): Promise<CategoryModel[]> => {
  'use server';
  const response = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await response.json();
  return data as CategoryModel[];
}

const Dashboard = async () => {
  const data = await fetchData();
  return (
    <div>
      <div className={"container"}>
        {/* <section className='mb-10'>
          <FlashSaleDailyClient />
        </section>
        <section className="ProductHistory">
          <ProductHistory />
        </section>
        <section className="Promotion">
          <Promotions />
        </section>
        <section className="bestSeller">
          <BestSeller />
        </section>
        <section className="newProduct">
          <NewProduct />
        </section> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 z-10 relative px-5">
          <DashboardClient data={data} /> 
        </div>*/}
      </div>
    </div>

  )
}

export default Dashboard