


import { Button } from "@/components/ui/button"

export function ButtonIcon({ children }) {
    return (
        <Button className="icon-btn" variant="outline" size="icon">
            {children}
        </Button>
    )
}