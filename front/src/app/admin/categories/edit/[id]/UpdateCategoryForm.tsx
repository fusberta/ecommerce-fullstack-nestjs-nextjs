'use client'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import CategoryService from '@/services/category.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React, { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IoReturnUpBack } from 'react-icons/io5'

interface IUpdateCategoryForm {
    id?: string | number
}

const UpdateCategoryForm: FC<IUpdateCategoryForm> = ({ id }) => {
    const { toast } = useToast()

    const {
        register: formRegister,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<{ name: string }>({ mode: 'onChange' })

    const queryClient = useQueryClient()
    const router = useRouter()

    const { mutate, isSuccess } = useMutation({
        mutationKey: ['update order'],
        mutationFn: (name: string) => CategoryService.update(id!, name),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['category', id] })
    })

    const { data: category } = useQuery({
        queryKey: ['category', id],
        queryFn: () => CategoryService.getById(id!),
        enabled: !!id,
    });

    const onSubmit: SubmitHandler<{ name: string }> = data => {
        mutate(data.name);
        toast({
            className: "bg-slate-950",
            title: "✅ Успех",
            description: "Категория успешно обновлена",
            action: (
                <ToastAction 
                    onClick={() => router.back()} 
                    altText="Вернуться на предыдущую страницу"
                >
                    <IoReturnUpBack />
                </ToastAction>
            ),
        })
        reset();
    };

    useEffect(() => {
        if (category) {
            reset({
                name: category.data.name,
            });
        }
    }, [category, reset]);

    if (!id) return null

    return (
        <div className='px-28 py-32'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading title='Редактировать категорию' />
                <div className="flex flex-col gap-3 mt-4">
                    <div>
                        <Label className='font-extrabold'>Название категории</Label>
                        <Input
                            className="w-full mt-2"
                            placeholder="Введите название категории"
                            {...formRegister('name', {
                                required: 'Нельзя оставить пустым название',
                            })}
                        />
                    </div>
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
            </form>
        </div>
    )
}

export default UpdateCategoryForm