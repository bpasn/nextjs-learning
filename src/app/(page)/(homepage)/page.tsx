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
     
      </div>
    </div>

  )
}

export default Dashboard