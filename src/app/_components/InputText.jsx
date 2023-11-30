'use client'
import React from 'react'
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from '@/components/ui/input'

const InputText = ({label, control, name, placeholder}) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem >
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    )
}

export default InputText