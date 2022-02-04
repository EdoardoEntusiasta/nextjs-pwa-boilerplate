import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core';
import NativeSelect from '@material-ui/core/NativeSelect';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const styles = theme => ({
    formControl: {
      margin: theme.spacing(0),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(0),
    },
    padding: {
        padding: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120
    },
});

const CustomSelect = (props) => {
    //console.log(props)
    //check sul tipo di dato per inizializzare il valore
    let tmp_valore = parseInt(props.valore);

    if ( Number.isInteger(tmp_valore) ){
        //console.log("data is integer")
    }else{
        tmp_valore = '';
	}
	
    const [items, setItems] = React.useState([]);
    const [selected, setSelected] = React.useState(tmp_valore);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    //console.log("selected: "+selected+"tmp_valore: "+tmp_valore);
    
    React.useEffect(() => {
		let tmp_valore = parseInt(props.valore);
		if ( Number.isInteger(tmp_valore) ){
			//console.log("data is integer")
		}else{
			tmp_valore = '';
		}
		setSelected(tmp_valore);
		//console.log("selected aggiornato da tmp_valore: "+tmp_valore);
	}, [props.valore]);
	
    React.useEffect(() => {
        async function getValori(path) {
            if(path){
                const response = await fetch(path);
                const body = await response.json();
                //console.log(JSON.stringify(body.risultato));
                setItems(body.risultato.map(({ id, etichetta }) => ({ label: etichetta, value: id })));
            }else{
                setItems(props.valori.map(({ id, etichetta }) => ({ label: etichetta, value: id })));
            }
        }
        getValori(props.percorso);
    }, []);

    React.useEffect(() => {
		//console.log('check if(props.valore!="") in customselect');
		if(props.valore!=''){
			//console.log('props.valore != ""!');
			if(inputLabel.current) setLabelWidth(inputLabel.current.offsetWidth);
		}else{
			//console.log('props.valore == ""!');
			setLabelWidth(0);
		}
    }, [props.valore]);
    
    const handleChange = event => {
        //console.log(event)
		setSelected(event.target.value);
		
        if(props.indice_multi === parseInt(props.indice_multi, 10)){
            //console.log('caso multi!')
            props.onChange(event.target.value,props.indice_multi);
        }else{
			//console.log('caso singolo!')
			if(props.returnLabel){

				const trova = (element) => {
					return element.value == event.target.value;
				}
				  
				let index = items.find(trova); // 130

				console.log( "props.onChange(" + event.target.value+"," + index+")" );
				console.log( index );


				if(event.target.value){
					props.onChange(event.target.value,index.label);
				}else{
					props.onChange(event.target.value,'');
				}
			}else{
				props.onChange(event.target.value);
			}
        }
    }

    const { classes } = props;

    if(!props.visibile){
        return(null)
    }else{
        return(
            <FormControl required={ props.richiesto } style={{ minWidth: '100%' }} variant="outlined" className={classes.formControl}>
                <InputLabel
                    htmlFor={props.id}
                    ref={inputLabel} 
                    disableAnimation={true} 
                    shrink={(props.valore!='')}>
                    {props.etichetta}
                </InputLabel>
                <NativeSelect
                    error={props.error}
                    disabled={props.disabilitato}
                    style={{ minWidth: '100%' }}
                    required={ props.richiesto }
                    value={selected}
                    onChange={handleChange}
                    input={
                        <OutlinedInput
                            notched
                            labelWidth={labelWidth}
                            name={props.id}
                            id={props.id}
                        />
                    }
                >
                    { props.nullable && <option value={null}></option>}

                    {items.map( ({ label, value }) => {
                        return (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        )
                    })}

                </NativeSelect>
                <FormHelperText>{props.helper_testo}</FormHelperText>
            </FormControl>
                            
        );
    }
    
   

}// component

export default withStyles(styles)(CustomSelect);