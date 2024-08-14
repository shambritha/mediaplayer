import { display } from '@mui/system';
import React, {Component} from 'react';
import { Button } from 'sandstone/Button';

class Header extends Component{
    render(){
        return(
            <header style ={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px',
                background: '#333',
                color: '#fff'
            }}>
                <h1>Media Player</h1>
                <div> 
                    <Button>Search</Button>
                    <Button>List</Button>
                    <Button>Closex</Button>
                </div>
            </header>
        );
            
        
    }
}

export default Header;