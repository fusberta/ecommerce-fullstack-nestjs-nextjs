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

    if (!profile) return null

    const updateUserMutation = useMutation({
        mutationKey: ['update avatar'],
        mutationFn: (data: IUserUpdate) => UserService.updateProfile(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] }),
    })

    const removePhotoMutation = useMutation({
        mutationKey: ['remove avatar'],
        mutationFn: () => {
            const data: IUserUpdate = {
                ...profile,
                avatarPath: '/default_avatar.png',
            }
            return UserService.updateProfile(data)
        },
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['profile'] }),
    })

    const handleChangePhoto = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            try {
                await UserService.updateAvatar(file)
                await updateUserMutation.mutateAsync({ ...profile, avatarPath: URL.createObjectURL(file) })
            } catch (error) {
                console.error('Error updating avatar:', error)
            }
        }
    }

    const handleRemovePhoto = async () => {
        try {
            await removePhotoMutation.mutateAsync()
        } catch (error) {
            console.error('Error removing photo:', error)
        }
    }
    
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
                            src={profile?.avatarPath}
                            alt="profile avatar"
                            className="rounded-full w-20"
                        />
                        <div className="ml-5 flex flex-col">
                            <input type="file" accept="image/*" onChange={handleChangePhoto} className="hidden" id="avatar-upload" />
                            <label htmlFor="avatar-upload">
                                <Button variant="default" className="mb-4">
                                    Изменить фото
                                </Button>
                            </label>
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