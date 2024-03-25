'use client';
import React, { useCallback, useEffect, useState } from 'react';
import ModalComponent from '../DialogComponent';
import { Input } from '../ui/input';
import { delay } from '@/lib/utils';
import useStoreModal from '@/stores/modal-store';
import { EachElement } from '@/EachElement';
import Image from 'next/image';
import SelectBox from '../SelectBox';
import { useRouter } from 'next/navigation';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
interface ListItem {
    label: string;
    image: string;
    value: string;
    category: string;
}

const StoreModal = ({
    categories
}: { categories: Category[] }) => {
    const storeModal = useStoreModal();
    const [listItemSearch, setListItemSearch] = useState<ListItem[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
    const searchItem = useCallback(
        async (search: string, signal: AbortSignal) => {
            try {
                setLoading(true);
                const response = await fetch(`https://api.escuelajs.co/api/v1/products/?&title=${search}`, {
                    signal,
                });
                await delay(3 * 1000);
                if (response.ok) {
                    const data = await response.json() as ProductModel[];
                    setListItemSearch(data.map((item: ProductModel) => ({ label: item.title, category: item.category.name, image: item.images[0], value: item.id })));
                } else {
                    setError(new Error('Failed to fetch data'));
                }
            } catch (error) {
                setError(error as unknown as Error);
            } finally {
                setLoading(false);
            }
        },
        []
    );

    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;

        if (searchValue.length > 4) {
            searchItem(searchValue, signal);
        }

        return () => {
            abortController.abort();
        };
    }, [searchItem, searchValue]);

    const handleSearch = (value: string) => {
        setSearchValue(value);
    };

    const handleCloseModal = () => {
        storeModal.onClose();
        setListItemSearch([]);
    };

    const navigate = useRouter();
    const handleSubmit = (form: React.FormEvent<HTMLFormElement>) => {
        form.preventDefault();
        const querySearch = form.currentTarget.q.value;
        const paramCategory = form.currentTarget.category.value;
        let url = "/shop";
        if (paramCategory) {
            url = url.concat("/" + paramCategory);
        }
        if (querySearch) {
            url = url.concat("?&q=" + querySearch);
        }
        window.location.href = url.concat("?&p=0&limit=10&ref=search-result");
        handleCloseModal();
    };
    return (
        <ModalComponent
            title='Search'
            isOpen={storeModal.isOpen}
            onClose={handleCloseModal}
            size="lg"
        >
            <div className="space-y-3">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
                        <Select name='category'>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="All caetgories" />
                            </SelectTrigger>
                            <SelectContent>
                               {categories.map(e => (
                                <SelectItem key={e.slug} value={e.slug}>{e.name}</SelectItem>
                               ))}
                            </SelectContent>
                        </Select>
                        <Input placeholder='Search' className="sticky top-0 z-50  focus-visible:outline-none" name="q" onChange={(e) => handleSearch(e.target.value)} />
                    </div>
                </form>
                <ul className='overflow-auto  max-h-[300px]'>
                    {listItemSearch.length && !loading ? (
                        <EachElement
                            render={(item: ListItem) => {
                                return (
                                    <li onClick={() => {
                                        window.location.href = `/shop/${item.category}/?&q=${item.label}`;
                                        handleCloseModal();
                                    }} className='border border-b-[1px_solid_#e6e6e6] cursor-pointer rounded scale-[.85] hover:scale-[.95] hover:bg-foreground/20 hover:text-white  hover:transition-all duration-300 hover:duration-300 flex flex-row space-x-4'>
                                        <div className="w-20 h-20 relative">
                                            <Image
                                                src={item.image.search(/\.(jpg|jpeg|png)$/i) > -1 ? item.image : ""}
                                                fill
                                                alt="image"
                                                className="object-contain"
                                            />
                                        </div>
                                        <span className='text-lg'>{item.label}</span>
                                    </li>
                                );
                            }}
                            of={listItemSearch}
                        />
                    )
                        : loading ? (
                            <li className='text-center'>...Loading</li>
                        ) : (
                            <li className='text-center'>Result Not Found!!</li>
                        )}

                </ul>
            </div>
        </ModalComponent>
    );
};

export default StoreModal;