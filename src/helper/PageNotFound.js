import { Box, Container, Divider, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigatePage();
    }, [])

    const navigatePage = () => {
        navigate("/error404")
    }
    return (
        <Container component="main" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'background.dark' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
                    404
                </Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="body1">
                    This page could not be found.
                </Typography>
            </Box>
        </Container>
    )
}

export default PageNotFound 