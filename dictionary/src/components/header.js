import React from 'react';
import './header.css';
import { ThemeProvider, TextField, createTheme, MenuItem } from '@material-ui/core';
import categories from '../data/category';

const Header = ({category, setCategory}) => {

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
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                        {   
                            categories.map((option) => (
                                <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
                            ))
                        }
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header