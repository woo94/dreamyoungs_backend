import React, { useState } from 'react'
import { Grid, RadioGroup, FormControlLabel, FormControl, FormLabel, Radio, Divider, TextField, Paper, Button, Typography } from '@mui/material'
import ReactJson from 'react-json-view'
import StatusCodeChip from '../StatusCodeChip'

const baseURL = "http://localhost:8080/user"

export default function User() {
    const [listUserResult, setListUserResult] = useState({})
    const [listUserStatusCode, setListUserStatusCode] = useState(0)

    const [createUserRequest, setCreateUserRequest] = useState({
        userName: '',
        userDesc: '',
        hasCat: false
    })
    const [createUserResult, setCreateUserResult] = useState({})
    const [createUserStatusCode, setCreateUserStatusCode] = useState(0)

    const [deleteUserIndex, setDeleteUserIndex] = useState('')
    const [deleteUserResult, setDeleteUserResult] = useState({})
    const [deleteUserStatusCode, setDeleteUserStatusCode] = useState(0)

    const [getHasCatIndex, setGetHasCatIndex] = useState('')
    const [getHasCatResult, setGetHasCatResult] = useState({})
    const [getHasCatStatusCode, setGetHasCatStatusCode] = useState(0)

    const [updateHasCatIndex, setUpdateHasCatIndex] = useState('')
    const [updateHasCatValue, setUpdateHasCatValue] = useState(false)
    const [updateHasCatResult, setUpdateHasCatResult] = useState({})
    const [updateHasCatStatusCode, setUpdateHasCatStatusCode] = useState(0)

    const getUser = async () => {
        await fetch(`${baseURL}`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => {
                setListUserStatusCode(res.status)
                return res.json()
            }
            )
            .then(json => setListUserResult(json))
    }

    const createUser = async () => {
        const headers = new Headers()
        headers.set('Content-Type', 'application/json')
        await fetch(`${baseURL}`, {
            method: 'POST',
            headers,
            credentials: 'include',
            body: JSON.stringify(createUserRequest)
        })
            .then(res => {
                setCreateUserStatusCode(res.status)
                return res.json()
            })
            .then(json => setCreateUserResult(json))
    }

    const deleteUser = async () => {
        await fetch(`${baseURL}/${deleteUserIndex}`, {
            method: 'DELETE',
            credentials: 'include'
        })
            .then(res => {
                setDeleteUserStatusCode(res.status)
                return res.json()
            })
            .then(json => setDeleteUserResult(json))
    }

    const getHasCat = async () => {
        await fetch(`${baseURL}/${getHasCatIndex}/hasCat`, {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => {
                setGetHasCatStatusCode(res.status)
                return res.json()
            })
            .then(json => setGetHasCatResult(json))
    }

    const updateHasCat = async () => {
        const headers = new Headers()
        headers.set('Content-Type', 'application/json')
        await fetch(`${baseURL}/${updateHasCatIndex}/hasCat`, {
            method: 'POST',
            credentials: 'include',
            headers,
            body: JSON.stringify({
                hasCat: updateHasCatValue
            })
        })
            .then(res => {
                setUpdateHasCatStatusCode(res.status)
                return res.json()
            })
            .then(json => setUpdateHasCatResult(json))
    }

    return (
        <>
            <Grid container sx={{ py: 2 }}>
                <Grid xs={6} item>
                    <Typography variant="h5">GET /user</Typography>
                    <Typography variant="body2">url: {`${baseURL}/user`}</Typography>
                    <Button sx={{ my: 2 }} onClick={getUser} variant="contained">send request</Button>
                    <Button sx={{ m: 2 }} onClick={() => {
                        setListUserResult({})
                        setListUserStatusCode(0)
                    }} variant="contained" color="secondary">reset</Button>
                </Grid>
                <Grid xs={6} item>
                    <Paper sx={{ my: 2, px: 2, py: 2 }} elevation={2}>
                        <StatusCodeChip status={listUserStatusCode} />
                        <ReactJson name="Response" src={listUserResult} />
                    </Paper>
                </Grid>
            </Grid>
            <Divider />
            <Grid container sx={{ py: 2 }}>
                <Grid xs={6} item>
                    <Typography variant="h5">POST /user</Typography>
                    <Typography variant="body2">url: {`${baseURL}/user`}</Typography>
                    <Button sx={{ my: 2 }} onClick={createUser} variant="contained">send request</Button>
                    <Button sx={{ m: 2 }} onClick={() => {
                        setCreateUserResult({})
                        setCreateUserStatusCode(0)
                    }} variant="contained" color="secondary">reset</Button>
                </Grid>
                <Grid xs={6} item>
                    <Paper sx={{ my: 2, px: 2, py: 2 }} elevation={2}>
                        <Grid container>
                            <Grid xs={6} item>
                                <ReactJson
                                    name="Request"
                                    src={createUserRequest}
                                    onEdit={(e) => {
                                        setCreateUserRequest(e.updated_src)
                                    }}
                                />
                            </Grid>
                            <Grid xs={6} item>
                                <StatusCodeChip status={createUserStatusCode} />
                                <ReactJson name="Response" src={createUserResult} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Divider />
            <Grid container sx={{ py: 2 }}>
                <Grid xs={6} item>
                    <Typography variant="h5">DELETE /user/:userIndex</Typography>
                    <Typography variant="body2">url: {`${baseURL}/user/:userIndex`}</Typography>
                    <Button sx={{ my: 2 }} onClick={deleteUser} variant="contained">send request</Button>
                    <Button sx={{ m: 2 }} onClick={() => {
                        setDeleteUserResult({})
                        setDeleteUserStatusCode(0)
                    }} variant="contained" color="secondary">reset</Button>
                </Grid>
                <Grid xs={6} item>
                    <Paper sx={{ my: 2, px: 2, py: 2 }} elevation={2}>
                        <Grid container>
                            <Grid xs={6} item>
                                <TextField value={deleteUserIndex} onChange={(e) => setDeleteUserIndex(e.target.value)} label="userIndex" />
                            </Grid>
                            <Grid xs={6} item>
                                <StatusCodeChip status={deleteUserStatusCode} />
                                <ReactJson name="Response" src={deleteUserResult} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Divider />
            <Grid container sx={{ py: 2 }}>
                <Grid xs={6} item>
                    <Typography variant="h5">GET /user/:userIndex/hascat</Typography>
                    <Typography variant="body2">url: {`${baseURL}/user/:userIndex/hasCat`}</Typography>
                    <Button sx={{ my: 2 }} onClick={getHasCat} variant="contained">send request</Button>
                    <Button sx={{ m: 2 }} onClick={
                        () => {
                            setGetHasCatResult({})
                            setGetHasCatStatusCode(0)
                        }
                    } variant="contained" color="secondary">reset</Button>
                </Grid>
                <Grid xs={6} item>
                    <Paper sx={{ my: 2, px: 2, py: 2 }} elevation={2}>
                        <Grid container>
                            <Grid xs={6} item>
                                <TextField value={getHasCatIndex} onChange={(e) => setGetHasCatIndex(e.target.value)} label="userIndex" />
                            </Grid>
                            <Grid xs={6} item>
                                <StatusCodeChip status={getHasCatStatusCode} />
                                <ReactJson name="Response" src={getHasCatResult} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <Divider />
            <Grid container sx={{ py: 2 }}>
                <Grid xs={6} item>
                    <Typography variant="h5">POST /user/:userIndex/hascat</Typography>
                    <Typography variant="body2">url: {`${baseURL}/user/:userIndex/hasCat`}</Typography>
                    <Button sx={{ my: 2 }} onClick={updateHasCat} variant="contained">send request</Button>
                    <Button sx={{ m: 2 }} onClick={
                        () => {
                            setUpdateHasCatResult({})
                            setUpdateHasCatStatusCode(0)
                        }
                    } variant="contained" color="secondary">reset</Button>
                </Grid>
                <Grid xs={6} item>
                    <Paper sx={{ my: 2, px: 2, py: 2 }} elevation={2}>
                        <Grid container>
                            <Grid xs={6} item>
                                <TextField value={updateHasCatIndex} onChange={(e) => setUpdateHasCatIndex(e.target.value)} label="userIndex" />
                                <FormControl>
                                    <FormLabel id="hasCat">update value</FormLabel>
                                    <RadioGroup value={updateHasCatValue ? 'true' : 'false'} onChange={(e) => {
                                        if (e.target.value === "true") {
                                            setUpdateHasCatValue(true)
                                        }
                                        else {
                                            setUpdateHasCatValue(false)
                                        }
                                    }} name="hasCat">
                                        <FormControlLabel value="true" control={<Radio />} label="true" />
                                        <FormControlLabel value="false" control={<Radio />} label="false" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid xs={6} item>
                                <StatusCodeChip status={updateHasCatStatusCode} />
                                <ReactJson name="Response" src={updateHasCatResult} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </>
    )
}