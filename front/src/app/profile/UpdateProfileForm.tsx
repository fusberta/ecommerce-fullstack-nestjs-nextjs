import Heading from '@/components/ui/Heading';
import { Button } from '@/components/ui/button/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import UserService from '@/services/user.service';
import { IUserUpdate } from '@/types/user.interface';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IUpdateUserForm {
    user: IUserUpdate;
}

const UpdateUserForm: FC<IUpdateUserForm> = ({ user }) => {
    const {
        register: formRegister,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm<IUserUpdate>({ mode: 'onChange' });
    const queryClient = useQueryClient();

    const { mutate, isSuccess } = useMutation({
        mutationKey: ['update user'],
        mutationFn: (data: IUserUpdate) => UserService.updateProfile(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] })
    });

    useEffect(() => {
        if (user) {
            reset({
                name: user.name,
                phone: user.phone,
                address: user.address
            });
        }
    }, [user, reset]);

    const onSubmit: SubmitHandler<IUserUpdate> = data => {
        data.email = user.email;
        mutate(data);
        reset();
    };

    return (
        <div className='px-4 py-2'>
            <Heading title='Обновление профиля' className='text-xl mb-6'/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-3 mt-4">
                    <div>
                        <Label className='font-extrabold'>Имя</Label>
                        <Input
                            className="w-full mt-2"
                            placeholder="Имя"
                            {...formRegister('name', {
                                required: 'Нельзя оставить пустым имя',
                            })}
                        />
                    </div>
                    <div>
                        <Label className='font-extrabold'>Телефон</Label>
                        <Input
                            className="w-full mt-2"
                            type="tel"
                            placeholder="Телефон"
                            {...formRegister('phone')}
                        />
                    </div>
                    <div>
                        <Label className='font-extrabold'>Адрес</Label>
                        <Textarea
                            className="w-full mt-2 resize-none h-20"
                            placeholder="Адрес"
                            {...formRegister('address')}
                        />
                    </div>

                    {Object.entries(errors) && (
                        <ul className='text-red-600 animate-opacity text-sm list-disc pl-4 mt-3'>
                            {Object.entries(errors).map(([_, error]) => (
                                <li key={error.message}>{error?.message}</li>
                            ))}
                        </ul>
                    )}

                    <div className="text-center mt-5">
                        <Button type='submit' variant={'default'}>
                            Отправить
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default UpdateUserForm;
