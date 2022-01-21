import React, { useState } from 'react'
import { Container, Box, Tab, Tabs } from '@mui/material'
import Test from './tabs/Test'
import User from './tabs/User'

function TabPanel(props) {
    const { index, value, children } = props
    return (
        <Box>
            {
                index === value && children
            }
        </Box>
    )
}

function App() {
    const [tab, setTab] = useState(0)

    const onChangeTab = (e, val) => {
        setTab(val)
    }

    return (
        <Container>
            <Tabs
                value={tab}
                variant='fullWidth'
                onChange={onChangeTab}
            >
                <Tab label="test" />
                <Tab label="user" />
            </Tabs>
            <TabPanel value={tab} index={0} >
                <Test />
            </TabPanel>
            <TabPanel value={tab} index={1}>
                <User />
            </TabPanel>
        </Container>
    );
}

export default App;
