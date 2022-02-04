import React, { useState } from 'react';
import { withStyles, Checkbox, Grid, Box } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import DeleteIcon from '@material-ui/icons/Delete';
import OutlinedInput from "@material-ui/core/OutlinedInput";

import UseApiToast from '../utils/UseApiToast.js'

const styles = theme => ({
    formControl: {
      margin: theme.spacing(1),
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
		minWidth: 120,
		fontSize:'0.1rem'
    },
});

const CustomAutoSelect = (props) => {

    const { addMessaggio } = UseApiToast()

    //console.log("CustomAutoSelect props: " + JSON.stringify(props) );

    const [items, setItems] = React.useState([]);
    const [selected, setSelected] = React.useState('');

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    React.useEffect(() => {
        async function getValori(path) {
            //console.log('getValori');
            if(path){
                const response = await fetch(path);
                const body = await response.json();
                //console.log(JSON.stringify(body.risultato));
                setItems(body.risultato.map(({ id, etichetta }) => ({ label: etichetta, value: id })));
            }else{
                setItems(props.valori.map(({ id, etichetta }) => ({ label: etichetta, value: id })));
            }
        }
        getValori(props.url_elenco);
    }, []);

    React.useEffect(() => {
        async function getValore() {
            if( props.valore_iniziale === undefined ){

                var params = {
                    tabella: props.tabella,
                    colonna: props.colonna, 
                    id: props.id,
                    filtro_colonna: props.filtro_colonna,
                    filtro_valore: props.filtro_valore,
                    filtro_colonna_2: props.filtro_colonna_2,
                    filtro_valore_2: props.filtro_valore_2,
                };
                
                var esc = encodeURIComponent;
                var query = Object.keys(params)
                    .map(k => esc(k) + '=' + esc(params[k]))
                    .join('&');

                let path = props.url_carica + '?' + query;
                const response = await fetch(path);
                const body = await response.json();
                //console.log("CustomAutoSelect valore: caricato: " + JSON.stringify(body.risultato));
                setSelected(body.risultato);
                //console.log(selected)
            }else{
                //console.log('CustomAutoSelect valore iniziale: ' + props.valore_iniziale)
                setSelected(props.valore_iniziale);
            }
        }
        getValore();
    }, []);

    const cambia = (e) => {
        console.log('salvo valore: '+e.target.value);

        var params = {
            tabella: props.tabella,
            colonna: props.colonna, 
            id: props.id,
            filtro_colonna: props.filtro_colonna,
            filtro_valore: props.filtro_valore,
            filtro_colonna_2: props.filtro_colonna_2,
            filtro_valore_2: props.filtro_valore_2,
            valore: e.target.value,
        };
        
        var esc = encodeURIComponent;
        var query = Object.keys(params)
            .map(k => esc(k) + '=' + esc(params[k]))
            .join('&');

        axios
            .get(props.url_salva + '?' + query)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.risultato == 'ok') {
                    console.log("salvato!");
					addMessaggio('Data updated!','successo'); 
					if(props.onChange) props.onChange();
                } else {
                    addMessaggio('Error while updating.','errore'); 
                }
            })
            .catch(error => {
                addMessaggio('An error occurred.','errore'); 
            });
        
        setSelected(e.target.value);
    }

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);

    const elimina = () => {
        console.log('elimino')
    }
    
    const { classes } = props;

    return(
        <Grid container spacing={2} >

            <Grid item xs={(props.permetti_eliminazione)?8:11} align="left">

                <FormControl required={ props.richiesto } style={{ minWidth: '100%',marginTop:'-10px' }} variant="outlined" className={classes.formControl}>
                    <InputLabel
                        htmlFor={props.id}
                        ref={inputLabel} 
                        disableAnimation={true} 
                        shrink={true}>
                        {props.etichetta}
                    </InputLabel>
                        {/*disableUnderline={true}*/}
                    <NativeSelect
						error={props.error}
                        disabled={props.disabilitato}
                        style={{ minWidth: '100%',fontSize:'1rem',borderRadius:'10px'}}
                        required={ props.richiesto }
                        value={selected}
                        onChange={cambia}
						input={
							<OutlinedInput
								notched
								labelWidth={labelWidth}
								name={"name_"+props.id}
								id={"id_"+props.id}
							/>
						}
                    >
                        { props.permetti_null ? (<option value={null}></option>) : null }

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
                    
            </Grid>

            { props.permetti_eliminazione ? (
            <Grid item xs={4} align="left">
                <DeleteIcon onClick={()=>elimina()} style={{marginTop:'10px'}}/>
            </Grid>
            ) : null }

        </Grid>
    );
    
}

export default withRouter(withStyles(styles)(CustomAutoSelect));