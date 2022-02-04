import React, { useState } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { withStyles,TextField } from '@material-ui/core';

const styles = theme => ({
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(1)
    }
});

const CustomTime = (props) => {

    //console.log(JSON.stringify(props.etichetta));
    //console.log(JSON.stringify(props.percorso));

    const [valore, setValore] = React.useState(props.valore);
    
    React.useEffect(() => {
        
    }, []);

    const handleChange = event => {
        setValore(event.target.value);
        props.onChange(event.target.value);
    };

    const { classes } = props;

    if(!props.visibile){
        //return('invisibile')
        return('')
    }else{
        return(
        
            <FormControl required={ props.richiesto } style={{ minWidth: '100%' }}>
                <TextField
                    type="time"
                    variant="outlined"
                    style={{ minWidth: '100%' }}
                    error={props.error}
                    id={props.id}
                    label={props.etichetta}
                    value={valore}
                    onChange = {handleChange}
                    disabled={props.disabilitato}
                />
                <FormHelperText>{props.helper_testo}</FormHelperText>
            </FormControl>
                            
        );
    }
    
}// component

export default withStyles(styles)(CustomTime);
