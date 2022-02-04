import React, { useState } from 'react';
import { withStyles, Grid, Box, Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import CustomText from './CustomText.js';
import UseApiToast from '../utils/UseApiToast.js'

const styles = theme => ({
    
});


const CustomNominatim = (props) => {

    const { addMessaggio } = UseApiToast()

    const [nominatim, setNominatim] = useState('');
    const [risultati, setRisultati] = useState([]);
    const [latitude, setLatitude] = useState('nd');
	const [longitude, setLongitude] = useState('nd');
	const [indirizzo, setIndirizzo] = useState('nd');

    const [disabilitaBottone, setDisabilitaBottone] = useState(false);

	async function ricerca(e){
        
        setDisabilitaBottone(true);    
        //e.preventDefault();
        console.log('invio form');
		//return false;
		
		let tmp = nominatim.replace(' ','-');
		console.log(tmp);

        const response = await fetch('https://nominatim.openstreetmap.org/search?format=json&q='+tmp);
		const body = await response.json();
		console.log(JSON.stringify(body));
		setRisultati(body)
    }

    let changeNominatim = (childData) => { 
	   	console.log('changeNominatim '+childData); 
		setNominatim(childData); 
	}

    let impostaLuogo = (risultato) => { 
	   console.log('impostaLuogo '+risultato); 
	   setLatitude(risultato.lat); 	
	   setLongitude(risultato.lon); 	
	   setIndirizzo(risultato.display_name); 
	   props.onResult(risultato.lat,risultato.lon,risultato.display_name);	
	}

    const { classes } = props;

	if(!props.visibile){
        return(null)
    }else{

	
    return (

		<Grid container spacing={4} alignItems="flex-end">

			<Grid item xs={10}>
				<CustomText 
						richiesto = {false}
						visibile={true}
						id = "nominatim"
						valore={nominatim}
						etichetta="Search for a place"
						helper_testo="Insert the address without punctuation, we'll try to find latitude and longitude for it"
						onChange = {changeNominatim}
						multiline
						rows={2}
						rowsMax={4}
					/>
					
			</Grid>

			<Grid item xs={2}>
				<div style={{marginBottom:'21px'}}>
				<Button onClick={ () => ricerca() } variant="contained" color="secondary" disableElevation>
					Search
				</Button>
				</div>
			</Grid>

			<Grid item xs={12}>
				<Grid container spacing={1} alignItems="flex-end">
					{
                    (risultati.length>0) ? 
                        (
                            risultati.map((risultato, i) => {     
                                return (
										<React.Fragment key={i}>
											<Grid item xs={12}>
												<Button onClick={()=>impostaLuogo(risultato)} variant="contained" color={(risultato.display_name == indirizzo)?'primary':'secondary'} disableElevation>
												{risultato.display_name}
												</Button>
											</Grid>
										</React.Fragment>
										) 
                            })
                        ) : null
                    }

					{/*<br/>
					latitude: {latitude}
					<br/>
					longitude: {longitude}
					<br/>
					address: {indirizzo}
					<br/>*/}
					<br/>
				</Grid>
			</Grid>


		</Grid>
		

	);
	
	}
}

export default withRouter(withStyles(styles)(CustomNominatim));