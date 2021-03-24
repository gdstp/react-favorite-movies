import { Button } from '@material-ui/core'
import React from 'react'

const ActionButton: React.FC<{onClick: () => void, liked: boolean}> = ({ onClick, liked }) => {
   return (
      <Button size="small" color="primary" onClick={onClick}>
         {liked ? 'Like' : 'Dislike'}
      </Button>
   )
}

export default ActionButton