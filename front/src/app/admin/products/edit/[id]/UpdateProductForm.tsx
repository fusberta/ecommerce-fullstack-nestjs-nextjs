'use client'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import ProductService from '@/services/product.service'
import { IProductUpdate } from '@/types/product.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { ChangeEvent, FC, useState } from 'react'
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

    const { mutate, isSuccess } = useMutation({
        mutationKey: ['update product'],
        mutationFn: (data: IProductUpdate) => ProductService.update(id, data),
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['get admin products', id] })
    })

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

    return (
        <div className='px-28 py-32'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading title='Редактировать' />
                <div className="mt-2">
                    <Input
                        className="w-full"
                        placeholder="Название"
                        {...formRegister('name', {
                            required: 'Нельзя оставить пустым название',
                        })}
                    />
                    <Textarea
                        className="w-full mt-2 resize-none"
                        placeholder="Описание"
                        {...formRegister('description')}
                    />
                    <Input
                        className="w-full mt-2"
                        type="number"
                        placeholder="Цена"
                        {...formRegister('price', {
                            required: 'Нельзя оставить пустым цену',
                            valueAsNumber: true,
                        })}
                    />
                    <Input
                        type='file'
                        accept='image/*'
                        name='images'
                        multiple
                        className="mt-2 file:text-sm file:font-semibold file:text-amber-500 hover:file:text-amber-600"
                        onChange={handleFilesChange}
                    />
                    <div className="mt-2 text-sm">
                        <ul className='flex gap-2'>
                            {selectedFiles.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                    <Input
                        className="w-full mt-2"
                        type="number"
                        placeholder="ID Категории"
                        {...formRegister('categoryId', {
                            required: 'Нельзя оставить пустым ID категории ' + selectedFiles.map(file => file.name),
                            valueAsNumber: true,
                        })}
                    />

                    {Object.entries(errors) && (
                        <ul className='text-red-600 animate-opacity text-sm list-disc pl-4 mt-3'>
                            {Object.entries(errors).map(([_, error]) => (
                                <li key={error.message}>{error?.message}</li>
                            ))}
                        </ul>
                    )}

                    <div className="text-center mb-2 mt-8">
                        <Button type='submit' variant={'outline'}>
                            Отправить
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UpdateProductForm