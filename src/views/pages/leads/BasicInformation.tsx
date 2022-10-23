import Grid from '@mui/material/Grid'

import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TextFieldSmall from 'src/@core/components/text-field/smallTextField'
import { Box, Button, Divider, TextField } from '@mui/material'

const BasicInformation = () => {
  return (
    <>
      <form>
        <Box sx={{ ml: 5, mt: 5, display: 'flex', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>Basic Information</div>
        </Box>
        <CardContent>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Business Name' placeholder='Business Name' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Contact Name' placeholder='Contact Name' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Email Id' placeholder='Email Id' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Contact Number' placeholder='Contact Number' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Alternate Number' placeholder='Alternate Number' />
            </Grid>
          </Grid>
        </CardContent>

        <Divider textAlign='center' />
        <Box sx={{ ml: 5, display: 'flex', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>Address</div>
        </Box>
        <CardContent>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Business Name' placeholder='Business Name' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Contact Name' placeholder='Contact Name' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Email Id' placeholder='Email Id' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Contact Number' placeholder='Contact Number' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Alternate Number' placeholder='Alternate Number' />
            </Grid>
          </Grid>
        </CardContent>

        <Divider textAlign='center' />
        <Box sx={{ ml: 5, display: 'flex', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>Additional Fields</div>
        </Box>
        <CardContent>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Business Name' placeholder='Business Name' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Contact Name' placeholder='Contact Name' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Email Id' placeholder='Email Id' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Contact Number' placeholder='Contact Number' />
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
              <TextFieldSmall fullWidth label='Alternate Number' placeholder='Alternate Number' />
            </Grid>
          </Grid>
        </CardContent>

        <Divider textAlign='center' />
        <Box sx={{ ml: 5, display: 'flex', alignItems: 'center' }}>
          <div style={{ fontWeight: 'bold' }}>Description</div>
        </Box>
        <CardContent>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField multiline rows={2} maxRows={4} label='Description' fullWidth />
            </Grid>
          </Grid>
        </CardContent>
        <Divider textAlign='center' />
        <CardContent>
          <Box>
            <Button variant='contained'>Save Changes</Button>
            <Button sx={{ ml: 4 }} type='reset' variant='outlined' color='secondary'>
              Reset
            </Button>
          </Box>
        </CardContent>
      </form>
    </>
  )
}

export default BasicInformation
 