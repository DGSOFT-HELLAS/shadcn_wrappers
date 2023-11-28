'use client'
import { useState } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

export default function InputPass({ label, control, name, placeholder }) {
  const [showPassword, setShowPassword] = useState(false)
  const handleClick = () => {
    setShowPassword(prev => !prev)
  }
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="relative">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type={showPassword ? 'text' : 'password'} placeholder={placeholder} {...field} />
          </FormControl>
          <div onClick={handleClick} className="password-icon-container">
            {showPassword ? (
              <FaEyeSlash className="password-icon" />
            ) : (
              <FaEye className="password-icon" />
            )}
          </div>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}