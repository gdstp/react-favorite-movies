import React from 'react'
import { Pagination } from '@material-ui/lab'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
   root: {
      width: '100%',
      display: 'flex',
      marginTop: 25,
      marginBottom: 25,
      justifyContent: 'center'
   }
})

interface PaginationInterface {
   total: number,
   onChange: (page: number) => void,
   currentRenderedPage: number
}

const PaginationContainer: React.FC<PaginationInterface> = ({ total, onChange, currentRenderedPage }) => {
   const classes = useStyles();

   return (
      <>
         {total && (
            <div className={classes.root}>
               <Pagination
                  count={Math.ceil(total / 10)}
                  variant="outlined"
                  shape="rounded"
                  page={currentRenderedPage}
                  onChange={(event: any, page: number) => { onChange(page) }}
               />
            </div>
         )}
      </>
   )
}

export default PaginationContainer