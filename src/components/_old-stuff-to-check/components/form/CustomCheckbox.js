import React, { useState } from 'react';
import { withStyles, Checkbox, Grid, Box } from '@material-ui/core';
import { withRouter } from "react-router-dom";

const styles = theme => ({
    letto:{
        
    }
});

const CustomCheckbox = (props) => {

    let tmp_valore = false;
    if(props.valore) tmp_valore = true;

    const [checked, setChecked] = useState(tmp_valore);
  
    const cambia = (e) => {
        console.log(e.target.checked)
        setChecked(e.target.checked);
        
        if(props.indice_multi === parseInt(props.indice_multi, 10)){
            console.log('caso multi!')
            props.onChange(e.target.checked,props.indice_multi);
        }else{
            console.log('caso singolo!')
            props.onChange(e.target.checked);
        }
        
    }
    
    const { classes } = props;

    return(
        <Checkbox style={{padding:'0px'}}
            id={props.id}
            checked={checked}
            onChange={cambia}
            disabled={props.disabilitato}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    );
    
}

export default withRouter(withStyles(styles)(CustomCheckbox));