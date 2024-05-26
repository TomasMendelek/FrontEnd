import React from 'react';
import { InputBase, alpha, styled } from '@mui/material'; 
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
    }));
    
    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));
    
    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'white',
        width: '100%',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          [theme.breakpoints.up('sm')]: {
            width: '100ch',
            '&:focus': {
              width: '120ch',
            },
          },
        },
    }));

    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon sx={{color:"white"}} />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
}
