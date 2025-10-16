const Container = ({ children, className = '', size = 'default' }) => {
  const sizes = {
    sm: 'max-w-container-sm',
    md: 'max-w-container-md',
    lg: 'max-w-container-lg',
    default: 'max-w-container',
    full: 'max-w-full',
  }
  
  return (
    <div className={`${sizes[size]} mx-auto px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}

export default Container

