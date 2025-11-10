import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md hover:shadow-lg",
        secondary:
          "border-transparent bg-gray-800 text-gray-200 hover:bg-gray-700",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-600",
        outline: "text-purple-400 border-purple-500/50 hover:bg-purple-500/10",
        glass: "glass-light border-purple-500/20 text-purple-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
