export const Grid = ({children} : {children: React.ReactNode}) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {children}
    </div>
  )
}

export const Grid1 = ({children} : {children?: React.ReactNode}) => {
  return (
    <div className="col-span-12">
      {children}
    </div>
  )
}

export const Grid2 = ({children} : {children?: React.ReactNode}) => {
  return (
    <div className="col-span-6">
      {children}
    </div>
  )
}

export const Grid3 = ({children} : {children?: React.ReactNode}) => {
  return (
    <div className="col-span-4">
      {children}
    </div>
  )
}

export const Grid4 = ({children} : {children?: React.ReactNode}) => {
  return (
    <div className="col-span-3">
      {children}
    </div>
  )
}