import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { withStyles } from '@material-ui/core';
import OutlinedInput from "@material-ui/core/OutlinedInput";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';

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
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

const CustomSelectMulti = (props) => {

    //console.log(props)
    //check sul tipo di dato per inizializzare il valore
    let tmp_valore = parseInt(props.valore);

    if ( Number.isInteger(tmp_valore) ){
        //console.log("data is integer")
    }else{
        tmp_valore = '';
    }

    const [items, setItems] = React.useState([]);
    const [scelti, setScelti] = React.useState([tmp_valore]);

    const inputLabel = React.useRef(null);
    const [labelWidth, setLabelWidth] = React.useState(0);
    //console.log("selected: "+selected+"tmp_valore: "+tmp_valore);
    
    React.useEffect(() => {
        async function getValori(path) {
            if(path){
                const response = await fetch(path);
                const body = await response.json();
                console.log(JSON.stringify(body.risultato));
                setItems(body.risultato.map(({ id, etichetta }) => ({ label: etichetta, value: id })));
            }else{
                setItems(props.valori.map(({ id, etichetta }) => ({ label: etichetta, value: id })));
            }
        }
        getValori(props.percorso);
    }, []);

    React.useEffect(() => {
        setLabelWidth(inputLabel.current.offsetWidth);
    }, []);
    
   
    const mostraValori = (selected) => {
        if(items){
            //console.log(items)
            let tmp = []
            for(let i = 0; i < selected.length; i++){
                if(items[selected[i]-1]){
                    //console.log('selected: ' + selected[i])
                    //console.log(items[selected[i]-1].label)
                    tmp.push(items[selected[i]-1].label); 
                }
            }
            console.log(tmp)
            return tmp.join(', ');
        }
    };

    const handleChange = (event) => {
        setScelti(event.target.value);
        ;
    };

    React.useEffect(() => {
        props.onChange(scelti);
    }, [scelti]);

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
                    shrink={true}>
                    {props.etichetta}
                </InputLabel>
                <Select
                    id="demo-mutiple-checkbox"
                    multiple
                    value={scelti}
                    onChange={handleChange}
                    input={<OutlinedInput
                            notched
                            labelWidth={labelWidth}
                            name={props.id}
                            id={props.id}
                        />}
                    renderValue={(selected) => mostraValori(selected)}
                    MenuProps={MenuProps}
                    >
                    {items.map(({ label, value }) => (
                        <MenuItem key={value} value={value}>
                            <Checkbox checked={scelti.indexOf(value) > -1} />
                            <ListItemText primary={label} />
                        </MenuItem>
                    ))}
                </Select>

                <FormHelperText>{props.helper_testo}</FormHelperText>
            </FormControl>
                            
        );
    }

}// component

export default withStyles(styles)(CustomSelectMulti);