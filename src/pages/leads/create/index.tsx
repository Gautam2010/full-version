// ** React Imports
import { SyntheticEvent, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab, { TabProps } from '@mui/material/Tab'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'

import SolarPanel from 'mdi-material-ui/SolarPanel'
import Plus from 'mdi-material-ui/Plus'
import FolderMultipleOutline from 'mdi-material-ui/FolderMultipleOutline'
import PhoneOutline from 'mdi-material-ui/PhoneOutline'
import NoteEditOutline from 'mdi-material-ui/NoteEditOutline'
import AccountGroupOutline from 'mdi-material-ui/AccountGroupOutline'
import CurrencyInr from 'mdi-material-ui/CurrencyInr'
import FileDocumentOutline from 'mdi-material-ui/FileDocumentOutline'
import DatabaseSearchOutline from 'mdi-material-ui/DatabaseSearchOutline'
import FileTreeOutline from 'mdi-material-ui/FileTreeOutline'
import ClipboardTextClockOutline from 'mdi-material-ui/ClipboardTextClockOutline'

// ** Demo Tabs Imports
import TabSecurity from 'src/views/pages/account-settings/TabSecurity'
import BasicInformation from 'src/views/pages/leads/BasicInformation'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'
import NotesList from 'src/views/core/notes/list'
import CompetitorList from 'src/views/core/competitors/list'
import History from 'src/views/core/history/history'
import DocumentList from 'src/views/core/document/document'
import ExpenseList from 'src/views/core/expenses/expense'
import CallLogList from 'src/views/core/calllog/list'

const Tab = styled(MuiTab)<TabProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const LeadEdit = () => {
  // ** State
  const [value, setValue] = useState<string>('account')

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      {/* <Card style={{ marginBottom: 10 }}>
        <CardContent>
          <Grid container>
            <Grid item xs={4}>
              <Typography variant='h6'>Ames Construction</Typography>
              <div>Ames Construction</div>
              <div style={{ display: 'flex' }}>
                <HomeOutline />
                Gyalshing, SIKKIM, India
              </div>
              <div style={{ display: 'flex' }}>
                <EmailOutline />
                gautam.parmar@ebyte.com
              </div>
            </Grid>
            <Grid item xs={4}>
              Ames Construction
            </Grid>
            <Grid item xs={4}>
              Ames Construction
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
      <Card>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label='account-settings tabs'
            sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
          >
            <Tab
              value='account'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccountOutline />
                  <TabName>Basic Information</TabName>
                </Box>
              }
            />
            <Tab
              value='security'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <SolarPanel />
                  <TabName>Products</TabName>
                </Box>
              }
            />
            <Tab
              value='tasks'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Plus />
                  <TabName>Tasks</TabName>
                </Box>
              }
            />
            <Tab
              value='documents'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FolderMultipleOutline />
                  <TabName>Documents</TabName>
                </Box>
              }
            />

            <Tab
              value='callog'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneOutline />
                  <TabName>Call log</TabName>
                </Box>
              }
            />
            <Tab
              value='notes'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <NoteEditOutline />
                  <TabName>Notes</TabName>
                </Box>
              }
            />
            <Tab
              value='competitors'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <AccountGroupOutline />
                  <TabName>Competitors</TabName>
                </Box>
              }
            />

            <Tab
              value='expenses'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CurrencyInr />
                  <TabName>Expenses</TabName>
                </Box>
              }
            />
            <Tab
              value='letters'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FileDocumentOutline />
                  <TabName>Letters</TabName>
                </Box>
              }
            />
            <Tab
              value='auditlog'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <DatabaseSearchOutline />
                  <TabName>Audit Logs</TabName>
                </Box>
              }
            />
            <Tab
              value='process'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <FileTreeOutline />
                  <TabName>Process</TabName>
                </Box>
              }
            />
            <Tab
              value='history'
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <ClipboardTextClockOutline />
                  <TabName>Hisory</TabName>
                </Box>
              }
            />
          </TabList>

          <TabPanel sx={{ p: 0 }} value='account'>
            <BasicInformation />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='security'>
            <TabSecurity />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='info'>
            <BasicInformation />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='notes'>
            <NotesList />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='competitors'>
            <CompetitorList />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='documents'>
            <DocumentList />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='history'>
            <History />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='expenses'>
            <ExpenseList />
          </TabPanel>
          <TabPanel sx={{ p: 0 }} value='callog'>
            <CallLogList />
          </TabPanel>
        </TabContext>
      </Card>
    </>
  )
}

export default LeadEdit
