import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button/button'
import ReviewService from '@/services/review.service'
import { IReviewCreate } from '@/types/review.interface'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { Rating } from 'react-simple-star-rating'

const LeaveReviewForm: FC<{ productId: number }> = ({ productId }) => {

    const {
        register: formRegister,
        reset,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<IReviewCreate>({ mode: 'onChange' })
    const queryClient = useQueryClient()

    const { mutate, isSuccess } = useMutation({
        mutationKey: ['leave review'],
        mutationFn: (data: IReviewCreate) => ReviewService.leave(productId, data),
        onSuccess: () => queryClient.refetchQueries({ queryKey: ['get product', productId] })
    })

    const onSubmit: SubmitHandler<IReviewCreate> = data => {
        mutate(data)
        reset()
    }

    if (isSuccess) return <div>✅ Отзыв опубликован</div>

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Heading title='Оставьте отзыв' />
                <div className="mt-2">
                    <Controller
                        control={control}
                        name="rating"
                        render={({ field: { onChange, value } }) => (
                            <Rating
                                onClick={onChange}
                                initialValue={value}
                                SVGstyle={{ display: 'inline-block' }}
                                size={25}
                                transition
                            />
                        )}
                        rules={{ required: 'Rating обязательное поле' }}
                    />
                    <textarea
                        {...formRegister('text', {
                            required: 'Нельзя оставить пустой отзыв'
                        })}
                        placeholder='Что вам понравилось/не понравилось в товаре?'
                        className='rounded-lg border border-gray-400 text-black bg-gray-200 p-3 block mt-4 resize-none w-full text-sm min-h-[110px]'
                    />
                    
                    {Object.entries(errors) && (
                        <ul className='text-red-600 animate-opacity text-sm list-disc pl-4 mt-3'>
                            {Object.entries(errors).map(([_, error]) => (
                                <li>{error?.message}</li>
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

export default LeaveReviewForm