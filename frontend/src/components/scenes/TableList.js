import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FormControl, InputLabel, MenuItem, TablePagination, TextField } from '@mui/material';
import Select from '@mui/material/Select';

const TableList = ({transactions, totalItems, search, month, handleChangePage, handleChangeRowsPerPage, setSearch, setMonth, page, rowsPerPage}) => {

  return (
    <div className='mt-12 mx-16 max-md:mx-2 mb-32'>

      <div className='text-2xl font-semibold mb-8'>Transaction Table</div>

      <div className='flex max-md:flex-col items-center justify-evenly w-full mb-8 '>
        <div className='max-md: mb-6 flex items-center'>
          <TextField id="standard-basic" label="Search" variant="outlined" value={search} onChange={ (e) => setSearch(e.target.value) } />
        </div>

        <div> 
          <FormControl sx={{ minWidth: 220 }}>
            <InputLabel>Search Month</InputLabel>
            <Select label="Search Month" value={month} onChange={ (e) => setMonth(e.target.value) }>
              <MenuItem value={'1'}>JAN</MenuItem>
              <MenuItem value={'2'}>FEB</MenuItem>
              <MenuItem value={'3'}>MAR</MenuItem>
              <MenuItem value={'4'}>APR</MenuItem>
              <MenuItem value={'5'}>MAY</MenuItem>
              <MenuItem value={'6'}>JUN</MenuItem>
              <MenuItem value={'7'}>JUL</MenuItem>
              <MenuItem value={'8'}>AUG</MenuItem>
              <MenuItem value={'9'}>SEP</MenuItem>
              <MenuItem value={'10'}>OCT</MenuItem>
              <MenuItem value={'11'}>NOV</MenuItem>
              <MenuItem value={'12'}>DEC</MenuItem>
            </Select>
          </FormControl>

        </div>
      </div>

      <TableContainer className='border-2 border-black'>
        <Table>

          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Sold</TableCell>
              <TableCell>Date of Sale</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Image</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            { transactions.map(transaction => (
              <TableRow key={transaction._id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>
                  <div className='w-32'>{transaction.title}</div>
                </TableCell>
                <TableCell>{transaction.price}</TableCell>
                <TableCell>
                  {transaction.sold === 'true' ? 'YES' : 'NO'}
                </TableCell>
                <TableCell>{transaction.dateOfSale}</TableCell>
                <TableCell>{transaction.category}</TableCell>
                <TableCell>
                  <div className='w-80'>
                    {transaction.description}    
                  </div>
                </TableCell>
                <TableCell>
                  <img className='w-36 h-auto' src={transaction.image} alt={transaction.title} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={totalItems}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </div>
  )
}

export default TableList