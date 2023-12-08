

'use client'
import { useState, useEffect } from "react";
import PinnedLinks from "./PinnedLinks";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash2, MoreHorizonta, ChevronDown, Pin, PinOff } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose
} from "@/components/ui/dialog"




export const options = [
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
    {
        id: 1,
        label: 'Dashboard',
        href: '/product',
    },
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
    const [state, setState] = useState({
        urls: [],
        pinnedUrls: [{
            label: null,
            href: null,
        }]
    })

    const extractUrl = () => {
        const urls = [];
        options.forEach((item) => {
            if (item.options) {
                item.options.forEach((subItem) => {
                    urls.push({
                        label: subItem.label,
                        href: subItem.href,
                    });
                });
            } else {
                urls.push({
                    label: item.label,
                    href: item.href,

                });
            }
        });
        setState(prev => ({ ...prev, urls: urls }))
    }


    useEffect(() => {
    }, [state])
    useEffect(() => {
        extractUrl()
    }, [])

    return (
        <div className="bg-secondary p-2 rounded-md mb-4 inline-flex">
            < PinnedBox state={state} setState={setState}>
                {state.urls.map(item => {
                    return (
                        <DropdownMenuItem key={item.href}>
                            <div className="flex align-center w-full cursor-pointer">
                                <PinOff className="text-slate-400 mr-2 h-4 w-4" />
                                <span >{item.label}</span>
                            </div>
                        </DropdownMenuItem>
                    )
                })}

            </ PinnedBox>
        </div>
    )
}



const PinnedBox = ({ children, state, setState }) => {
    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div size="sm" variant="ghost" className="pinned-item bg-background text-foreground mr-2 inline-flex" >
                        <Pin className="mr-2 h-4 w-4" />
                        Pinned Links
                        <ChevronDown className="ml-2 h-4 w-4" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Pinned Items</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        {children}
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <DialogTrigger asChild>
                            <DropdownMenuItem>
                                <PlusCircle className="mr-2 h-4 w-4" />
                                <span>add more </span>
                            </DropdownMenuItem>
                        </DialogTrigger>

                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                {/* DIALOG */}
                <DialogHeader>
                    <DialogTitle>Add more pinned URLS</DialogTitle>
                    <DialogDescription>
                        {/* DIALOG CONTENT */}
                        <div className="h-40 overflow-auto my-3">
                            <DialogLinks state={state} setState={setState} />
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                       <div className="grid grid-cols-2	 gap-4">
                       <Button type="button" variant="secondary">
                            cancel
                        </Button>
                       <Button type="button" >
                            save
                        </Button>
                       </div>
                    </DialogClose>
                    
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}


const DialogLinks = ({ state }) => {
    return (
        <div>
            {state.urls.map(item => {
                return (
                    <div key={item.href} className="rounded-md border-dashed flex align-center justify-between mb-1 w-full cursor-pointer border p-2 ">
                        <span >{item.label}</span>
                        <PlusCircle className="text-white mr-2 h-4 w-4 " />
                    </div>
                )
            })}
        </div>
    )
}