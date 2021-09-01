import React from 'react';
import './header.css';
import { ThemeProvider, TextField, createTheme, MenuItem } from '@material-ui/core';

const Header = () => {

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff'
            },
        },
    });

    return (
        <div className='header'>
            <span className='title'>Word Hunt</span>  
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField id="standard-basic" label="Standard" />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        helperText="Please select your currency"
                        >
                            <MenuItem>
                         English
                            </MenuItem>
                        
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header