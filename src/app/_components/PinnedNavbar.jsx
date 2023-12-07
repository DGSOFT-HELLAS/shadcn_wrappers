

'use client'
import PinnedLinks from "./PinnedLinks";
import { Button } from "@/components/ui/button";
import { Pin } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { MoreHorizontal } from 'lucide-react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useEffect } from "react";
export const options = [
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
    {
        id: 2,
        label: 'Product',
        href: '/dashboard',
      
        options: [
            { label: 'Subproduct', href: '/product' },
            { label: 'Subproduct2', href: '/product' }
        ]
    },
    {
        id: 3,
        label: 'Users',
        href: '/dashboard',
    },

]
export default function PinnedNavbar() {
    const handleOptions = () => {
        console.log("options")
        
    }
    useEffect(() => {
        handleOptions()
    }, [])
    console.log(options)
    return (
        <div className="bg-secondary p-2 rounded-md mb-4 inline-flex">
            <Popover>
                <PopoverTrigger>
                    <Button size="sm" variant="" className="pinned-links bg-background text-foreground mr-2" >
                        <Pin className="mr-2 h-4 w-4" />
                        Pinned Links
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
            <Button size="sm" variant="" className="pinned-links bg-background text-foreground mr-1" >
                <MoreHorizontal className="h-4 w-4" />
            </Button>
        </div>
    )
}