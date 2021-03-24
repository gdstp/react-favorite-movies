import React from 'react'
import './style.css'

export const ErrorComponent: React.FC<{ msg: string }> = ({ msg }) => {
   return (
      <div className="container">
         Falhou: {msg}
      </div>
   )
}

export const LoadingComponent: React.FC = () => {
   return (
      <div className="container">
         <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
   )
}

const StateComponent: React.FC<{ isLoading: boolean, error: string }> = ({ isLoading, error }) => {
   return (
      <div>
         {isLoading && <LoadingComponent />}
         {error && <ErrorComponent msg={error} />}
      </div>
   )
}

export default StateComponent