import React, { Suspense } from 'react';
import PaginationComponent from '@/components/pagination';
import ProductTable from './ui/table';
import Heading from '@/components/ui/heading';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { fetchTotalPage } from './action/fetch';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product',
};
interface ProductAdminPageProps {
  searchParams: { [key: string]: string | string | string[] | undefined };
}
const ProductAdminPage = async ({
  searchParams
}: ProductAdminPageProps) => {
  const page = Number(searchParams['page'] ?? "1");
  const pageSize = Number(searchParams['pageSize'] ?? "10");
  const totalPage = await fetchTotalPage();
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between items-center mb-10">
        <Heading
          title='Products'
          description='Manage your Products'
        />
        <Link href={"/admin/products/new"}>
          <Button>
            Add Product
          </Button>
        </Link>
      </div>
      <Suspense key={page} fallback={<>Loading</>}>
        <ProductTable page={page} pageSize={pageSize} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <PaginationComponent totalPage={totalPage} />
      </div>
    </div>
  );
};

export default ProductAdminPage;