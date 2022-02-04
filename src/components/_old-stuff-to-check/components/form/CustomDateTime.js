import React, { useState, Grid } from 'react';
import FormControl from '@material-ui/core/FormControl';
import { withStyles, FormHelperText } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { DateTimePicker, DatePicker } from "@material-ui/pickers";
import DeleteIcon from '@material-ui/icons/Delete';



var moment = require('moment');
import MomentUtils from "@date-io/moment";
moment.locale("moment/locale/it");

moment.defineLocale('it-foo', {
    parentLocale: 'it',
    weekdaysShort : ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"]
});


const styles = theme => ({
    margin: {
        margin: theme.spacing(2),
    },
    padding: {
        padding: theme.spacing(1)
    }
});


const CustomDateTime = (props) => {

    const [locale, setLocale] = useState("it-foo");
    const [error, setError] = useState(props.error);
    const [helper, setHelper] = useState(props.helper_testo);
    const [selectedDate, setSelectedDate] = React.useState( (props.valore_data) ? moment(props.valore_data+' '+props.valore_ora, 'YYYY-MM-DD HH:mm').toDate() : null );

    React.useEffect(() => {
        setSelectedDate( (props.valore_data) ? moment(props.valore_data+' '+props.valore_ora, 'YYYY-MM-DD HH:mm').toDate() : null );
    }, [props.valore_data, props.valore_ora]);
	
	React.useEffect(() => {
		setHelper(props.helper_testo)
	}, [props.helper_testo]);
	
	const clear = () => {
		setSelectedDate( null )
	}

    const handleDateChange = value => {

        let ora = null;
        
        console.log(moment(value).format('DD/MM/YYYY'));
        console.log(moment(value).format('HH:mm'));

        //popolo l'ora in automatico per i componenti solo data
        if(props.tipo == 'data_inizio') {
            console.log('data_inizio')
            ora = '00:00';
        }else if(props.tipo == 'data_fine'){
            console.log('data_fine')
            ora = '23:59';
        }else{
            ora = moment(value).format('HH:mm');
        }
        
        setSelectedDate(value);
        props.onChange( { data: moment(value).format('YYYY-MM-DD'), ora: ora } );

	};
	
	const elimina = () => {
        console.log('elimino')
    }

    const { classes } = props;

    if(!props.visibile){
       
        return(null);
        
    }else if(props.tipo == 'data_inizio' || props.tipo == 'data_fine' ){
        return(
			<FormControl required={ props.richiesto } style={{ minWidth: '100%' }}>
				<MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale}>
					<DatePicker
						inputVariant="outlined"
						style={{ minWidth: '100%' }}
						format = "DD/MM/YYYY"
						label = {props.etichetta}
						value = {selectedDate}
						onChange = {handleDateChange}
						error={error}
						disabled={props.disabilitato}
						minDate={(props.minDate)?props.minDate:undefined}
					/>
				</MuiPickersUtilsProvider>
				<FormHelperText>{helper}</FormHelperText>
			</FormControl>  

				
        );
    }else{
        return(
			/*<React.Fragment>
<button onClick={()=>clear()}>Clear</button>
				<Grid container spacing={0} >

					<Grid item xs={12} align="left">
						<FormControl required={ props.richiesto } style={{ minWidth: '100%' }}>
							<MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} locale={locale}>
								<DateTimePicker
									inputVariant="outlined"
									style={{ minWidth: '100%' }}
									format = "DD/MM/YYYY HH:mm"
									label = {props.etichetta}
									value = {selectedDate}
									onChange = {handleDateChange}
									error={error}
									disabled={props.disabilitato}
									ampm={false}
									minutesStep={15}
								/>
							</MuiPickersUtilsProvider>
							<FormHelperText>{helper}</FormHelperText>
						</FormControl>
					</Grid>

					
				</Grid>
			</React.Fragment>*/ null
		);	
	}
	
}// component

export default withStyles(styles)(CustomDateTime);