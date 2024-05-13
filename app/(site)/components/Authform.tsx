'use client'
import Input from "@/app/components/inputs/input";
import { use, useCallback, useState } from "react";
import {FieldValues, useForm, SubmitHandler } from "react-hook-form";

type variant =  'LOGIN' | 'REGISTER' 
const AuthForm = () =>{
    const [variant, setVariant] = useState<variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);
    const  toggleVariant = useCallback(() => {
        {
            if (variant === 'LOGIN') {
                setVariant('REGISTER');
            }
            else {
                setVariant('LOGIN')
            }
        }
    },[variant]);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name:'',
            email:'',
            password:''
        }
    })

    const onSubmit : SubmitHandler<FieldValues> = (data) =>{
        setIsLoading(true) 

        if (variant === 'REGISTER'){
            // Axios
        }
        if (variant === 'LOGIN'){
            // Next Auth sign in
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)
    }

    return(
        <div
        className="
        mt-8
        sm:mx-auto
        sm:w-full
        sm:max-w-md
        "
        >
         <div className="
            bg-white
            px-4
            py-8
            sm:rounded-lg
            sm:px-10
            ">
        <form className="space-y-6"
         onSubmit = {handleSubmit(onSubmit)}
                >
                    <Input/>
                </form>
            </div>
        </div>
    );
}

export default AuthForm;