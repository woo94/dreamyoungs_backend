import React from 'react'
import Chip from '@mui/material/Chip'

export default function StatusCodeChip(props) {
    const { status } = props

    if (status === 0) {
        return null
    }

    return (
        <Chip label={status} color={status === 200 ? 'success' : 'error'} />
    )
}