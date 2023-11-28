"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import InputDatePicker from "../single/InputDatePicker"
import InputText from "../single/InputText"
import  InputPass from "../single/InputPassword"


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
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 form">
                <InputText control={form.control} name='username' label='Username' placeholder='shadcn' />
                <InputPass control={form.control} name='password' label='Password'/>
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}



