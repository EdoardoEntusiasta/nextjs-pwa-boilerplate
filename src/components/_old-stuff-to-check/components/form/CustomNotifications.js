import React, { useState, useEffect } from 'react';
import { withStyles, Grid, Box, Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import EditIcon from '@material-ui/icons/Edit';

import CustomText from './CustomText.js';

const styles = theme => ({
    
});


const CustomNotifications = (props) => {

    const [dato, setDato] = useState(props.dato);
	const [notifications, setNotifications] = useState([]);
	const [editMode, setEditMode] = useState(false);
	//console.log('CustomNotifications: '+dato)

    React.useEffect(() => {
        if(dato){
			console.log('ho il dato splitto in notifiche');
			setNotifications(dato.split(','))
		} 
	}, [dato,props.dato]);

    React.useEffect(() => {
        setDato(props.dato)
	}, [props.dato]);
	
	const handleDelete = (i) => {
		console.info('You clicked the delete icon.');
		let tmp = notifications;
		console.log(tmp);
		tmp.splice(i,1);
		setNotifications(tmp);
		let tmp_a = tmp.join(',')
		setDato(tmp_a);
		props.onChange(tmp_a);
	};

	let changeDato = (childData) => { 
		console.log('change dato'+childData); setDato(childData); 
	}

	let salva = (childData) => { 
		if(dato != ''){
			let tmp = dato.split(',');

			var filtered = tmp.filter(function (el) {
				return el != '';
			});
			setDato(filtered.join(','));
			setNotifications(filtered);
		}else{
			setNotifications([]);
		}
		setEditMode(false);
		props.onChange(dato);
	}


    const { classes } = props;

    return (
        <React.Fragment>

			<Grid container spacing={2}>

				<Grid item xs={10}>
					{notifications.map((obj, i) => {
						return (
							<Chip
								key={i}
								label={obj}
								onDelete={()=>handleDelete(i)}
								style={{marginLeft:'0.6rem'}}
							/>
						);
					})}
				</Grid>
				
				
				{editMode && 
					<Grid item xs={10}>

						<CustomText 
							richiesto = {false}
							visibile={true}
							id = "notifications_id"
							valore={dato}
							etichetta="Notifications list"
							helper_testo=""
							onChange = {changeDato}
						/>

					</Grid>
				}

				{editMode && 
					<Grid item xs={2}>
						<Button variant="outlined" color="secondary" startIcon={<EditIcon />} onClick={(event)=>salva(true)}>Close</Button>
					</Grid>
				}

				{!editMode && notifications.length > 0 &&
					<Grid item xs={2}><Button variant="outlined" color="secondary" startIcon={<EditIcon />} onClick={(event)=>setEditMode(true)}>Edit</Button></Grid>
				}

				<Grid item xs={12}>
					{!editMode &&  notifications.length == 0 &&
						<Button variant="outlined" color="secondary" startIcon={<EditIcon />} onClick={(event)=>setEditMode(true)}>Add notifications</Button>
					}
				</Grid>

			</Grid>

			

		</React.Fragment>
    );
}

export default withRouter(withStyles(styles)(CustomNotifications));