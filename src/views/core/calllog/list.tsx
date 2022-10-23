import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Plus from 'mdi-material-ui/Plus'
import Magnify from 'mdi-material-ui/Magnify'

import * as React from 'react'
import TableContainer from '@mui/material/TableContainer'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button, CardActions, CardContent, Divider, TablePagination, TextField } from '@mui/material'
import { useState } from 'react'
import SmallButton from 'src/@core/components/buttons/smallButton'

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

const buttonStyle: any = {
  margin: '0px 10px'
}

const CallLogList = () => {
  const [showSearch, setShowSearch] = useState(false)

  return (
    <>
      <CardContent style={{ padding: '25px 0px 0px 0px' }}>
        <Grid container spacing={6} style={{ padding: 15 }}>
          <Grid item xs={6}>
            {/* <Typography variant='h5'>Leads</Typography> */}
          </Grid>

          <Grid xs={6} container direction='row' justifyContent='flex-end' alignItems='center'>
            <SmallButton
              startIcon={<Magnify />}
              onClick={() => {
                setShowSearch(!showSearch)
              }}
              style={buttonStyle}
              variant={showSearch ? 'outlined' : 'contained'}
            >
              Search
            </SmallButton>
            <Link href='/leads/1'>
              <SmallButton startIcon={<Plus />} variant='contained'>
                Add Call Details
              </SmallButton>
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          {showSearch ? (
            <Grid item xs={12}>
              <Card>
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={12}>
                    <form onSubmit={e => e.preventDefault()}>
                      <CardContent>
                        <Grid container spacing={5}>
                          <Grid item xs={12} sm={3}>
                            <TextField size='small' fullWidth label='Username' placeholder='carterLeonard' />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField
                              size='small'
                              fullWidth
                              type='email'
                              label='Email'
                              placeholder='carterleonard@gmail.com'
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField
                              size='small'
                              fullWidth
                              type='email'
                              label='Email'
                              placeholder='carterleonard@gmail.com'
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField size='small' fullWidth label='Username' placeholder='carterLeonard' />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField size='small' fullWidth label='Username' placeholder='carterLeonard' />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField
                              size='small'
                              fullWidth
                              type='email'
                              label='Email'
                              placeholder='carterleonard@gmail.com'
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField
                              size='small'
                              fullWidth
                              type='email'
                              label='Email'
                              placeholder='carterleonard@gmail.com'
                            />
                          </Grid>
                          <Grid item xs={12} sm={3}>
                            <TextField size='small' fullWidth label='Username' placeholder='carterLeonard' />
                          </Grid>
                        </Grid>
                      </CardContent>
                      <Divider sx={{ margin: 0 }} />
                      <CardActions>
                        <Grid xs={12} container direction='row' justifyContent='flex-end' alignItems='center'>
                          <Button startIcon={<Magnify />} style={buttonStyle} size='small' variant='contained'>
                            Search
                          </Button>
                          <Button size='small' variant='outlined'>
                            Reset
                          </Button>
                        </Grid>
                      </CardActions>
                    </form>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ) : null}

          <Grid item xs={12}>
            <Card>
              <Paper>
                {/* <CardHeader title='Basic Table' titleTypographyProps={{ variant: 'h6' }}>
                  this is filter
                </CardHeader> */}

                {/* <DataGrid rows={rows} columns={columns} /> */}
                <TableContainer>
                  <Table sx={{ minWidth: 650 }} stickyHeader>
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align='right'>Calories</TableCell>
                        <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                        <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                        <TableCell align='right'>Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map(row => (
                        <TableRow hover key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component='th' scope='row'>
                            {row.name}
                          </TableCell>
                          <TableCell align='right'>{row.calories}</TableCell>
                          <TableCell align='right'>{row.fat}</TableCell>
                          <TableCell align='right'>{row.carbs}</TableCell>
                          <TableCell align='right'>{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component='div'
                  count={rows.length}
                  rowsPerPage={10}
                  page={0}
                  onPageChange={() => {
                    console.log('onPageChange')
                  }}
                  onRowsPerPageChange={() => {
                    console.log('onRowsPerPageChange')
                  }}
                />
              </Paper>
            </Card>
          </Grid>
        </Grid>
      </CardContent>
    </>
  )
}

export default CallLogList
