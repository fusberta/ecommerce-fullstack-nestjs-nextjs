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
import { AxiosError } from "axios";

/**
 * The `Auth` component is the main authentication component for the application. It handles both login and registration functionality.
 *
 * The component uses the `useAuth` hook to check if the user is currently loading, and the `useAuthRedirect` hook to handle redirecting the user after successful authentication.
 *
 * The component renders a set of tabs, one for login and one for registration. Each tab contains a form with input fields for the necessary information (email, password, username, etc.). The forms are managed using the `useForm` hook from the `react-hook-form` library.
 *
 * When the user submits the form, the `onSubmit` function is called, which dispatches the appropriate action (login or register) using the `useActions` hook. After a successful submission, the form state is reset.
 *
 * The component also displays a loading indicator while the authentication process is in progress.
 */
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
        if (type === 'login') {
            login(data);
        } else {
            register(data);
        }
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