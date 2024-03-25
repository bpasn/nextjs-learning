import { Button } from '@/components/ui/button';
import { delay } from '@/lib/utils';
import Heading from '@/components/ui/heading';
import Link from 'next/link';
import CategoryTable from './ui/table';
import { Suspense } from 'react';
import PaginationComponent from '@/components/pagination';
import { getTotalPage } from './action';


const CategoriesAdminPage = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string | string[] | undefined };
}) => {
  const page = Number(searchParams['page'] ?? 0);
  const perPage = Number(searchParams['pageSize'] ?? 10);
  await delay(2 * 1000);
  const totalPage = await getTotalPage();
  return (
    <div>
      <div className="flex flex-row justify-between items-center mb-10">
        <Heading
          title='Categories'
          description='Manage your categories'
        />
        <Link href={"/admin/categories/new"}>
          <Button>Add Categories</Button>
        </Link>
      </div>
      <Suspense key={page} fallback={<>Loading</>}>
        <CategoryTable page={page} pageSize={perPage} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <PaginationComponent totalPage={totalPage} />
      </div>
    </div>
  );
};

export default CategoriesAdminPage;