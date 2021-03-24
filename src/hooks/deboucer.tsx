import { useEffect, useState } from 'react'

const useDeboucer = (value: string, timeout: number) => {
   const [debouncedValue, setDebouncedValue] = useState(value)

   useEffect(() => {
      const timer = setTimeout(() => {
         setDebouncedValue(value)
      }, timeout)

      return () => {
         clearTimeout(timer)
      }
   }, [value, timeout])

   return debouncedValue
}

export default useDeboucer