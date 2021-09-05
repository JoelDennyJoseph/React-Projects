import React from 'react';
import './header.css';
import { ThemeProvider, TextField, createTheme, MenuItem } from '@material-ui/core';
import categories from '../../data/category';

const Header = ({category, setCategory, word, setWord, setMeanings}) => {

    const darkTheme = createTheme({
        palette: {
            type: 'dark',
            primary: {
                main: '#fff'
            },
        },
    });

    const handleChange = (e) => {
        setCategory(e.target.value);
        setWord("");
        setMeanings([]);
    };

    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt" }</span>  
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                    <TextField 
                        id="standard-basic" 
                        label="Standard" 
                        className="search"
                        value={word}
                        onChange={(e) =>{setWord(e.target.value)}}
                    />
                    <TextField
                        id="standard-select-currency"
                        select
                        className="select"
                        label="Select"
                        helperText="Please select your currency"
                        value={category}
                        onChange={(e) => handleChange(e)}
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