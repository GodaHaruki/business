export const Grid = ({children, className} : {children: React.ReactNode, className?: string}) => {
  return (
    <div className={`grid grid-cols-12 gap-4 ${className}`}>
      {children}
    </div>
  )
}

export const Grid1 = ({children, className} : {children?: React.ReactNode, className?: string}) => {
  return (
    <div className={`col-span-12 ${className}`}>
      {children}
    </div>
  )
}

export const Grid2 = ({children, className} : {children?: React.ReactNode, className?: string}) => {
  return (
    <div className={`col-span-6 ${className}`}>
      {children}
    </div>
  )
}

export const Grid3 = ({children, className} : {children?: React.ReactNode, className?: string}) => {
  return (
    <div className={`col-span-4 ${className}`}>
      {children}
    </div>
  )
}

export const Grid4 = ({children, className} : {children?: React.ReactNode, className?: string}) => {
  return (
    <div className={`col-span-3${className}`}>
      {children}
    </div>
  )
}