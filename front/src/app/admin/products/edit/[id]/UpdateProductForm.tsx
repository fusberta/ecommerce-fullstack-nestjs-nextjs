'use client'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Select from '@/components/ui/select/Select'
import { Textarea } from '@/components/ui/textarea'
import CategoryService from '@/services/category.service'
import ProductService from '@/services/product.service'
import { IProductUpdate } from '@/types/product.interface'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface IUpdateProductForm {
    id?: string | number
}

const UpdateProductForm: FC<IUpdateProductForm> = ({ id }) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const {
        register: formRegister,
        reset,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<IProductUpdate>({ mode: 'onChange' })
    const queryClient = useQueryClient()

    if (!id) return null

    const { data: product, isLoading } = useQuery({
        queryKey: ['product', id],
        queryFn: () => ProductService.getById(id),
        enabled: !!id,
    });

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: () => CategoryService.getAll(),
        enabled:!!id,
    });

    const { mutate, isSuccess } = useMutation({
        mutationKey: ['update product'],
        mutationFn: (data: IProductUpdate) => ProductService.update(id, data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['product', id] })
    })

    useEffect(() => {
        if (product) {
            reset({
                name: product.data.name,
                description: product.data.description,
                price: product.data.price,
                categoryId: product.data.category.id
            });
        }
    }, [product, reset]);

    const onSubmit: SubmitHandler<IProductUpdate> = data => {
        data.images = selectedFiles.map(file => URL.createObjectURL(file));
        mutate(data)
        reset();
        setSelectedFiles([]);
    }

    const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            const newFiles = Array.from(files);
            if (selectedFiles.length + newFiles.length > 4) {
                alert('Вы не можете загрузить больше файлов.');
            } else {
                setSelectedFiles(prevFiles => [...prevFiles, ...newFiles]);
                setValue('images', [...selectedFiles, ...newFiles].map(file => URL.createObjectURL(file)));
            }
        }
    };

    if (!categories) return <div>Error loading data</div>;

    const categoryOptions = categories.data.map(category => ({
        key: category.id,
        label: category.name,
    }));

    return (
        <div className='px-28 py-32'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading title='Редактировать' />
                <div className="flex flex-col gap-3 mt-4">
                    <div>
                        <Label className='font-extrabold'>Название</Label>
                        <Input
                            className="w-full mt-2"
                            placeholder="Название"
                            {...formRegister('name', {
                                required: 'Нельзя оставить пустым название',
                            })}
                        />
                    </div>
                    <div>
                        <Label className='font-extrabold'>Описание</Label>
                        <Textarea
                            className="w-full resize-none mt-2"
                            placeholder="Описание"
                            {...formRegister('description')}
                        />
                    </div>
                    <div>
                        <Label className='font-extrabold'>Цена</Label>
                        <Input
                            className="w-full mt-2"
                            type="number"
                            placeholder="Цена"
                            {...formRegister('price', {
                                required: 'Нельзя оставить пустым цену',
                                valueAsNumber: true,
                            })}
                        />
                    </div>
                    <div>
                        <Label className='font-extrabold'>Изображения</Label>
                        <Input
                            type='file'
                            accept='image/*'
                            name='images'
                            multiple
                            className="file:text-sm mt-2 file:font-semibold file:text-amber-500 hover:file:text-amber-600"
                            onChange={handleFilesChange}
                        />
                    </div>
                    <div className="text-sm">
                        <ul className='flex gap-2'>
                            {selectedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='flex flex-col gap-3 w-1/4'>
                        <Label className='font-extrabold'>Категория</Label>
                        <Select
                            data={categoryOptions}
                            value={categoryOptions.find(option => option.key === product?.data.category.id)}
                            onChange={option => setValue('categoryId', option?.key)}
                        />
                    </div>

                    {Object.entries(errors) && (
                        <ul className='text-red-600 animate-opacity text-sm list-disc pl-4 mt-3'>
                            {Object.entries(errors).map(([_, error]) => (
                                <li key={error.message}>{error?.message}</li>
                            ))}
                        </ul>
                    )}

                    <div className="text-center mb-2 mt-8">
                        <Button type='submit' variant={'default'}>
                            Отправить
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateProductForm