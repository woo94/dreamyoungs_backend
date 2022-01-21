import React, { useState } from 'react'
import { Grid, Paper, Button, Typography } from '@mui/material'
import ReactJson from 'react-json-view'
import StatusCodeChip from '../StatusCodeChip'

const baseURL = "http://localhost:8080"

export default function Test() {
    const [test1Result, setTest1Result] = useState('')
    const [test1StatusCode, setTest1StatusCode] = useState(0)

    const [test2Result, setTest2Result] = useState({})
    const [test2StatusCode, setTest2StatusCode] = useState(0)

    const onSendTest1 = async () => {
        await fetch(`${baseURL}/test1`, {
            method: 'GET'
        })
            .then(res => {
                setTest1StatusCode(res.status)
                return res.text()
            })
            .then(text => {
                setTest1Result(text)
            }).catch(err => {
                setTest1Result(err.message)
            })
    }

    const onSendTest2 = async () => {
        await fetch(`${baseURL}/test2`, {
            method: 'GET'
        }).then(res => {
            setTest2StatusCode(res.status)
            return res.json()
        }).then(json => {
            setTest2Result(json)
        }).catch(err => {
            setTest2Result({
                error: err.message
            })
        })
    }

    return (
        <>
            <Grid alignItems="center" container sx={{ py: 2 }}>
                <Grid xs={6} item>
                    <Typography variant="h5">GET /test1</Typography>
                    <Typography variant="body1">url: {`${baseURL}/test1`}</Typography>
                    <Button sx={{ my: 2 }} onClick={onSendTest1} variant="contained">send request</Button>
                    <Button sx={{ m: 2 }} onClick={() => {
                        setTest1Result('')
                        setTest1StatusCode(0)
                    }}
                        variant="contained" color="secondary">reset</Button>
                </Grid>
                <Grid xs={6} item>
                    <Paper sx={{ px: 2, py: 2 }} elevation={2} >
                        <StatusCodeChip status={test1StatusCode} />
                        <Typography>
                            {test1Result}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container sx={{ py: 2 }}>
                <Grid xs={6} item>
                    <Typography variant="h5">GET /test2</Typography>
                    <Typography variant="body2">url: {`${baseURL}/test2`}</Typography>
                    <Button sx={{ my: 2 }} onClick={onSendTest2} variant="contained">send request</Button>
                    <Button sx={{ m: 2 }} onClick={() => {
                        setTest2Result({})
                        setTest2StatusCode(0)
                    }} variant="contained" color="secondary">reset</Button>
                </Grid>
                <Grid xs={6} item>
                    <Paper sx={{ px: 2, py: 2 }} elevation={2}>
                        <StatusCodeChip status={test2StatusCode} />
                        <ReactJson name="Response" src={test2Result} />
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}