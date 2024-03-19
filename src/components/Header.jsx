'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
    return (
        <div className="p-5 mt-1 flex justify-between">
            <a href="#">
                <h1 className='pl-5 text-2xl font-bold tracking-tight'>solidServe</h1>
            </a>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>

        </div>
    );
}