import React, { useState } from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { withStyles,TextField } from '@material-ui/core';

import CustomDialogOpener from '../items/CustomDialogOpener.js'

const styles = theme => ({
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(1)
    }
});

const CustomNumber = (props) => {

    //console.log(JSON.stringify(props.etichetta));
	//console.log(JSON.stringify(props.valore));
	
	let tmp = props.valore;
	if(props.valore === null) tmp = '';

	const [valore, setValore] = React.useState(tmp);
	const [fakeValore, setFakeValore] = React.useState(tmp);
    const [openModal, setOpenModal] = useState(false);
	
    
    React.useEffect(() => {
        if(props.valore === null){
			setValore('');
			setFakeValore('');
		}else{
			setValore(props.valore);
			if(props.valore == 0){
				setFakeValore('');
			}else{
				setFakeValore(props.valore);
			}
		} 
    }, [props.valore]);

	function isNumeric(str) {
		if (typeof str != "string") return false // we only process strings!  
		return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
			   !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
	}

	const apriModale = (id) => {
        console.log('apro modale creazione');
        setOpenModal(true);
    };

    const chiudiModale = async (id) => {
        console.log('chiudo modale creazione');
        setOpenModal(false);
	};

    const handleChange = event => {

		let tmp = event.target.value;
		console.log(event.target.value);
		console.log(typeof event.target.value);
		//console.log(tmp=='');
		
		if(tmp == '' || tmp === null){
			setValore(0);
			setFakeValore('');
			props.onChange(tmp);
		} else{
			if(isNumeric(tmp)){
				console.log('isNumeric da customNumber: ' + tmp);
				setValore(tmp);
				if(tmp == 0){
					setFakeValore('');
				}else{
					setFakeValore(tmp);
				}
				props.onChange(tmp);
			}else{
				setOpenModal(true);
			}
		}

		
        
    };

    const { classes } = props;

    if(!props.visibile){
        //return('invisibile')
        return('')
    }else{
        return(

			<React.Fragment>

        
            <FormControl required={ props.richiesto } style={{ minWidth: '100%' }}>
                <TextField
                    variant="outlined"
					required={ props.richiesto }
                    style={{ minWidth: '100%' }}
                    error={props.error}
                    id={props.id}
                    label={props.etichetta}
                    value={fakeValore}
                    onChange = {handleChange}
                    multiline = {props.multiline}
                    rows = {props.rows}
                    rowsMax = {props.rowsMax}
                    disabled={props.disabilitato}
                />
                {props.helper_testo && <FormHelperText style={{backgroundColor:'#fafafa'}}>{(props.helper_testo)?props.helper_testo:' '}</FormHelperText>}
            </FormControl>

			<CustomDialogOpener
					open={openModal}
					visibile={true}
					titolo="Invalid value"
					etichetta=""
					onOpen={apriModale}
					onClose={chiudiModale}
					component={
						<div>Value has to be a number not a string!</div>
					}
				>
					
			</CustomDialogOpener>

			</React.Fragment>
                            
        );
    }

}// component

export default withStyles(styles)(CustomNumber);