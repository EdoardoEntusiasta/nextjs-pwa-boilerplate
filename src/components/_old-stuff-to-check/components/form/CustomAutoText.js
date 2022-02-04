import React, { useState } from 'react';
import { withStyles } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import UseApiToast from '../utils/UseApiToast.js'

const styles = theme => ({
    formControl: {
      margin: theme.spacing(1),
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(1)
    },
    formControl: {
        margin: theme.spacing(0),
        minWidth: 120
    },
    campo_testo:{
        width:'80px',
        color:'#f00',
        padding:'0px',
    }
});

const CustomAutoText = (props) => {

    const { addMessaggio } = UseApiToast()

    //console.log("CustomAutoText props: " + JSON.stringify(props) );

    const url_carica = '/api/admin/generic/carica/text/';
    const url_salva = '/api/admin/generic/salva/text/';

    let valore_param = '';
    if( props.valore_iniziale){
        valore_param = props.valore_iniziale;
    } 
    //console.log('valore_param '+props.colonna+','+valore_param);

    const [valore, setValore] = React.useState('');
    const [id, setId] = useState(false);

    if(props.id != id) setId(props.id);
    if(props.valore_iniziale !== undefined && props.valore_iniziale != valore) setValore(props.valore_iniziale);

    React.useEffect(() => {
        async function getValore() {
            console.log('getValore'+props.colonna)
            if( props.valore_iniziale === undefined ){
                if( props.id !== undefined ){

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

                    let path = url_carica + '?' + query;
                    const response = await fetch(path);
                    const body = await response.json();
                    console.log(props.colonna + "CustomAutoText valore caricato: " + JSON.stringify(body.risultato));
                    setValore(body.risultato);
                }else{
                    console.log('id mancante!');
                }
            }else{
                console.log(props.colonna + 'CustomAutoCheckbox valore iniziale: ' + props.valore_iniziale)
                setValore(props.valore_iniziale);
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
            .get(url_salva + '?' + query)
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.risultato == 'ok') {
                    console.log("salvato!");
                    addMessaggio('Data updated!','successo'); 
                } else {
                    addMessaggio('Error while updating.','errore'); 
                }
            })
            .catch(error => {
                addMessaggio('An error occurred.','errore'); 
            });
        
        setValore(e.target.value);
    }

    const { classes } = props;

    return(
        <FormControl required={ props.richiesto }>
                <TextField
                    variant="outlined"
                    style={{ padding: '5px' }}
                    error={props.error}
                    id={props.id}
                    label={props.etichetta}
                    value={valore}
                    onChange = {cambia}
                    multiline = {props.multiline}
                    rows = {props.rows}
                    rowsMax = {props.rowsMax}
                    disabled={props.disabilitato}
                    width={props.larghezza}
                    classes={(props.larghezza)?{root:classes.campo_testo}:null}
                />
                <FormHelperText>{props.helper_testo}</FormHelperText>
            </FormControl>
    );
    
}

export default withRouter(withStyles(styles)(CustomAutoText));