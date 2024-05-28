'use client'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import { ChangeEvent, useEffect, useState, type FC } from 'react'
import UpdateUserForm from './UpdateProfileForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import UserService from '@/services/user.service'
import { IUserUpdate } from '@/types/user.interface'

const Profile: FC = () => {
    const profile = useProfile()

    const { user } = useAuth()

    const queryClient = useQueryClient();

    if (!user) useAuthRedirect()

    const updateAvatarMutation = useMutation({
        mutationKey: ['updateAvatar'],
        mutationFn: (file: File) => UserService.updateAvatar(file),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] })
    });

    const removeAvatarMutation = useMutation({
        mutationKey: ['removePhoto'],
        mutationFn: (data: IUserUpdate) => UserService.updateProfile(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] })
    });


    const handleChangePhoto = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file && profile) {
            const data = new FormData();
            data.append('avatar', file);
            data.append('email', profile.email);
            updateAvatarMutation.mutate(file);
        }
    };

    const handleRemovePhoto = () => {
        if (profile) {
            const data: IUserUpdate = {
                ...profile,
                avatarPath: '/uploads/default-avatar.png',
            };
            removeAvatarMutation.mutate(data);
        }
    };

    const getFullImageUrl = (path: string) => `http://localhost:4200${path}`;

    if (!profile) return null

    return (
        <div className='px-28 py-32'>
            <Heading title='Профиль' className='mb-4' />
            <div className="flex items-start flex-wrap gap-5">
                <Card>
                    <CardHeader className='flex-row items-center'>
                        <UpdateUserForm user={profile} />
                    </CardHeader>
                </Card>
                <Card className='mb-4'>
                    <CardHeader className='flex-row items-center'>
                        <Image
                            width={50}
                            height={50}
                            src={getFullImageUrl(profile?.avatarPath)}
                            alt="profile avatar"
                            className="rounded-full w-20"
                        />
                        <div className="ml-5 flex flex-col">
                            <input
                                type="file"
                                accept="image/*"
                                style={{ display: 'none' }}
                                id="avatar-input"
                                onChange={handleChangePhoto}
                            />
                            <Button
                                variant="default"
                                className="mb-4"
                                onClick={() => document.getElementById('avatar-input')?.click()}
                            >
                                Изменить фото
                            </Button>
                            <Button variant="destructive" onClick={handleRemovePhoto}>
                                Удалить фото
                            </Button>
                        </div>
                    </CardHeader>
                </Card>
            </div>
        </div>
    )
}

export default Profile