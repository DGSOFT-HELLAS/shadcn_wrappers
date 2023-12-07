
'use client'
import { Button } from "@/components/ui/button"
import { Pin } from 'lucide-react';
import { ChevronDown } from 'lucide-react';





export default function PinnedLinks() {
    return (
        <Button size="sm" variant="" className="pinned-links bg-background text-foreground" >
                <Pin  className="mr-2 h-4 w-4" />
                Pinned Links
                <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
    )
}

