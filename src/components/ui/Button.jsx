import { forwardRef } from 'react'

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  href,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-rook text-white hover:shadow-rook-lg focus:ring-rook-brown',
    secondary: 'bg-white text-rook-brown border-2 border-rook-brown hover:bg-rook-brown-50 focus:ring-rook-brown',
    outline: 'bg-transparent text-rook-brown border-2 border-rook-brown hover:bg-rook-brown hover:text-white focus:ring-rook-brown',
    ghost: 'bg-transparent text-rook-brown hover:bg-rook-brown-50 focus:ring-rook-brown',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={classes} ref={ref} {...props}>
        {children}
      </a>
    )
  }
  
  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button

