"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputText from "../_components/InputText"
import  InputPass from "../_components/InputPassword"


const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",

    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
    date: z.date({
        required_error: "A date of birth is required.",
      }),
})

export function FormLogin() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            password: "",
            date: null,
        },
    })

    function onSubmit(values) {
        console.log('values')
        console.log(values)
    }
    return (
        <Form {...form}>
            <div className="login-form-intro">
            <h1 className="text-3xl font-semibold text-center">Welcome to DigiHub</h1>
            <p className="text-3xl font-semibold text-center">login to your account</p>
            </div>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 form">
                <InputText control={form.control} name='username' label='Username' placeholder='shadcn' />
                <InputPass control={form.control} name='password' label='Password'/>
                <Button className="w-full" type="submit">Submit</Button>
            </form>
        </Form>
    )
}



