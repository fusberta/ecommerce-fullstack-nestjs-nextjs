'use client'

import { FC, useState } from "react";
import { Button } from "@/components/ui/button/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { MdOutlineNavigateNext } from "react-icons/md";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/useAuth";
import { useActions } from "@/hooks/useActions";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAuth, IRegister } from "@/store/user/user.interface";
import InputMessage from "@/components/ui/InputMessage";
import { validEmail } from "./validate-email";
import { useAuthRedirect } from "@/hooks/useAuthRedirect";
import { HashLoader } from "react-spinners";

const Auth: FC = () => {
    const { isLoading } = useAuth();

    useAuthRedirect();

    const { login, register } = useActions();

    const [type, setType] = useState<'login' | 'register'>("login");

    const { register: formRegister, handleSubmit, formState: { errors }, reset } = useForm<IRegister>({
        mode: 'onChange'
    })

    const { register: formLogin, handleSubmit: loginSubmit, formState: { errors: loginErrors }, reset: loginReset } = useForm<IAuth>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<IAuth> = (data) => {
        type === 'login' ? login(data) : register(data);
        reset();
        loginReset();
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <Tabs defaultValue="login" className="w-[400px] mx-4">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Вход</TabsTrigger>
                    <TabsTrigger value="register">Регистрация</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                        {isLoading ?
                            <div className="flex items-center justify-center py-14">
                                <HashLoader color="#1f2547" />
                            </div> :
                            <form onSubmit={loginSubmit(onSubmit)}>
                                <CardHeader>
                                    <CardTitle>Авторизация</CardTitle>
                                    <CardDescription>
                                        Войдите в свой аккаунт, чтобы продолжить покупки
                                    </CardDescription>
                                </CardHeader>
                                <Separator />
                                <CardContent className="space-y-4 mt-6">
                                    <InputMessage placeholder="Email" {...formLogin("email", {
                                        required: "Поле обязательно для заполнения",
                                        pattern: {
                                            value: validEmail,
                                            message: "Введен некорректный email"
                                        }
                                    })}
                                        error={loginErrors.email?.message}
                                    />
                                    <InputMessage placeholder="Password" {...formLogin("password", {
                                        required: "Поле обязательно для заполнения",
                                        minLength: {
                                            value: 6,
                                            message: "Минимальная длина пароля 6 символов"
                                        }
                                    })}
                                        type="password"
                                        error={loginErrors.password?.message}
                                    />
                                </CardContent>
                                <CardFooter className="flex items-center justify-end">
                                    <Button type="submit" className="font-medium mt-2 pl-7" onClick={() => setType("login")}>
                                        Войти<MdOutlineNavigateNext size='1.8em' />
                                    </Button>
                                </CardFooter>
                            </form>
                        }
                    </Card>
                </TabsContent>
                <TabsContent value="register">
                    <Card>
                        {isLoading ?
                            <div className="flex items-center justify-center py-14">
                                <HashLoader color="#1f2547" />
                            </div> :
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <CardHeader>
                                    <CardTitle>Регистрация</CardTitle>
                                    <CardDescription>
                                        Зарегистрируйтесь, чтобы начать покупки
                                    </CardDescription>
                                </CardHeader>
                                <Separator />
                                <CardContent className="space-y-4 mt-6">
                                    <InputMessage placeholder="Username" {...formRegister("username", {
                                        required: "Поле обязательно для заполнения",
                                        minLength: {
                                            value: 5,
                                            message: "Минимальная длина имени 5 символов"
                                        }
                                    })}
                                        error={errors.username?.message}
                                    />
                                    <InputMessage placeholder="Email" {...formRegister("email", {
                                        required: "Поле обязательно для заполнения",
                                        pattern: {
                                            value: validEmail,
                                            message: "Введен некорректный email"
                                        }
                                    })}
                                        error={errors.email?.message}
                                    />
                                    <InputMessage placeholder="Password" {...formRegister("password", {
                                        required: "Поле обязательно для заполнения",
                                        minLength: {
                                            value: 6,
                                            message: "Минимальная длина пароля 6 символов"
                                        }
                                    })}
                                        type="password"
                                        error={errors.password?.message}
                                    />
                                    <Input type="password" placeholder="Password confirmation" />
                                </CardContent>
                                <CardFooter className="flex items-center justify-end">
                                    <Button type="submit" className="font-medium mt-2 pl-7" onClick={() => setType("register")}>
                                        Зарегистрироваться<MdOutlineNavigateNext size='1.8em' />
                                    </Button>
                                </CardFooter>
                            </form>
                        }
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}


export default Auth;