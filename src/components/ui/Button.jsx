import { Button as ShadcnButton } from "@/components/ui/button"

const Button = ({ children, variant, size, className, ...props }) => {
  return (
    <ShadcnButton variant={variant} size={size} className={className} {...props}>
      {children}
    </ShadcnButton>
  )
}

export default Button
