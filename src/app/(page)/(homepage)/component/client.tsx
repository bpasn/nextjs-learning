'use client';
import { EachElement } from '@/EachElement'
import CardItem from '@/components/CardItemComponent'
import React from 'react'

interface DashboardClientProps {
  data: CategoryModel[]
}

const DashboardClient = ({ data }: DashboardClientProps) => {
  return (
    <EachElement
      render={(item: CategoryModel, index: number) => (
        <CardItem
          key={index}
          id={item.id}
          category={item.name}
          image={item.image!}
          href={`/shop?categoryId=${item.id}`}
        />
      )}
      of={data}
    />
  )
}

export default DashboardClient