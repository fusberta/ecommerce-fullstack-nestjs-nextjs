'use client'

import Heading from '@/components/ui/Heading'
import { Button } from '@/components/ui/button/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'

import { useProfile } from '@/hooks/useProfile'
import Image from 'next/image'
import type { FC } from 'react'
import { FaPen } from 'react-icons/fa'

const Profile: FC = () => {
    const profile = useProfile()

    const { user } = useAuth()

    if (!user) useAuthRedirect()

    if (!profile) return null

    return (
        <div className='px-28 py-32'>
            <Heading title='Профиль' className='mb-4' />
            <div className="flex">
                <Card>
                    <CardHeader className='flex-row items-center'>
                        <Image
                            width={50}
                            height={50}
                            src={profile?.avatarPath}
                            alt="profile avatar"
                            className="rounded-full w-20"
                        />
                        <div className="ml-5 flex flex-col">
                            <Button variant="default" className="mb-4">
                                Изменить фото
                            </Button>
                            <Button variant="destructive">
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