import React from 'react';
import'./index.scss'


import Button from '../../elements/Button'
import Input from '../../elements/Input'

function Bar() {
  return (
        <div className="container">
            <div className="logo">
                <h1>DRIZZLE</h1>
            </div>
            <div className="text">
                <p></p>
            </div>
            <div className="search-bar">
                <Input />
                <Button>Search</Button>
            </div>
        </div>
        )
}

export default Bar;