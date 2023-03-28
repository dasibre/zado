import React from 'react';
import {AppBar, Toolbar, styled, Typography} from '@mui/material';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent:"space-between"
});

function NavBar(props) {
    return <AppBar position="static">
        <StyledToolBar>
            <Typography variant="h6">
                <AddHomeWorkIcon sx={{marginRight: 1}}/>
                Zado
            </Typography>
        </StyledToolBar>
    </AppBar>;
}

export default NavBar;
