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

const CustomText = (props) => {

    //console.log(JSON.stringify(props.etichetta));
	//console.log(JSON.stringify(props.valore));
	
	let tmp = props.valore;
	if(props.valore === null) tmp = '';

	const [valore, setValore] = React.useState(tmp);
	const [timer, setTimer] = useState(null); //debounce
	
    
    React.useEffect(() => {
        if(props.valore === null){
			setValore('');
		}else{
			setValore(props.valore);
		} 
    }, [props.valore]);

    const handleChange = event => {
		setValore(event.target.value);
		let tmp = event.target.value;
		//setTimeout( debounceOnChange() , 200);
		props.onChange(event.target.value); 
	};
	
	const debounceOnChange = () => {
		console.log('resetto il timer');
		clearTimeout(timer);
		let timeout = setTimeout( (tmp) => { console.log('setto timer!'); chiamaProp()} , 400);
		setTimer(timeout);
	}
	
	const chiamaProp = () => {
		console.log('triggero props.onChange!');
		props.onChange(valore); 
	}

    const { classes } = props;

    if(!props.visibile){
        //return('invisibile')
        return('')
    }else{
        return(
        
            <FormControl required={ props.richiesto } style={{ minWidth: '100%' }}>
                <TextField
                    variant="outlined"
					required={ props.richiesto }
                    style={{ minWidth: '100%' }}
                    error={props.error}
                    id={props.id}
                    label={props.etichetta}
                    value={valore}
                    onChange = {handleChange}
                    multiline = {props.multiline}
                    rows = {props.rows}
                    rowsMax = {props.rowsMax}
                    disabled={props.disabilitato}
                />
                {props.helper_testo && <FormHelperText style={{backgroundColor:'#fafafa'}}>{(props.helper_testo)?props.helper_testo:' '}</FormHelperText>}
            </FormControl>
                            
        );
    }

}// component

export default withStyles(styles)(CustomText);