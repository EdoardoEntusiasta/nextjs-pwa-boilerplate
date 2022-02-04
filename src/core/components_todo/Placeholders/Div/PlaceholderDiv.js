import React, { Component, useContext } from 'react';
import Style  from './Style';


const PlaceholderDiv = (props) => {
    const classes = Style();
    let compProps = {
    }

    Object.assign(compProps, props);

    return (
        <div className={classes.placeholderDiv}>
            <div className={classes.animatedBackground}></div>
        </div>
    )
}

export default CoreSelectComponent;
