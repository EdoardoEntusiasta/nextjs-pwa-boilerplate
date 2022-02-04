import React from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle'
import 'react-calendar/dist/Calendar.css';
import '../css/calendar.css';
import {  makeStyles } from '@material-ui/core';
import { Grid } from '@material-ui/core';

var moment = require('moment');


const useStyles = makeStyles({
    periodoRichiesta: {
        backgroundColor: '#33d3',
    },
    primary: {
      fontSize: '10px',
    },
    icon:{
        minWidth: '30px',
    },
    overlay:{
        position: 'absolute',
        backgroundColor: '#f000',
        width:'92%',
        height:'38%',
        marginTop:'20%',
    }
});


const CustomCalendarDisplay = (props) => {

    console.log(props);

    console.log('moment props inizio ' + moment(props.data_ora_inizio,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm'));
    console.log('moment props fine ' + moment(props.data_ora_fine,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm'));

    /*
    const [dataInizio, setDataInizio] = React.useState( moment(props.data_ora_inizio,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') );
    const [dataFine, setDataFine] = React.useState( moment(props.data_ora_fine,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') );
    */
    
    const [dataInizio, setDataInizio] = React.useState( new Date(2020,2,28) );
    const [dataFine, setDataFine] = React.useState( new Date(2020,2,30) );

    console.log("dataInizio: " + dataInizio);
    console.log("dataFine: " + dataFine);

    /*
    const [state, setState] = React.useState({ checkedA: false, });
    const handleChange = name => event => { setState({ ...state, [name]: event.target.checked }); };
    */
    
    React.useEffect(() => {
        console.log('props aggiornata!')
        setDataInizio( moment(props.data_ora_inizio,'YYYY-MM-DD HH:mm').toDate() )
    }, [props.data_ora_inizio]);
    
    React.useEffect(() => {
        console.log('props aggiornata!')
        setDataFine( moment(props.data_ora_fine,'YYYY-MM-DD HH:mm').toDate() )
    }, [props.data_ora_fine]);

    const onClickDay = value => {
        if(1){
            console.log('no click!')
        } else{
            console.log('Clicked day: ' + value)
        } 
    };

    function tileClassName({ date }) {
        
        //console.log('ok controllo cosa accendere!');
        if( date.getTime() <= dataInizio.getTime() && date.getTime() >= dataFine.getTime() ){
            return classes.periodoRichiesta
        }
        
    };

    const classes = useStyles();

    return (
        
        <Grid container spacing={0} >

            {/*<Grid item xs={2}>
                <div>
                    <Switch
                        checked={state.checkedA}
                        onChange={handleChange('checkedA')}
                        value="checkedA"
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div> 
            </Grid> 

            <Grid item xs={10}>
                <Box fontSize={14} fontWeight="fontWeightBold"  m={1}>
                    Modifica il periodo
                </Box>
            </Grid> */}  
            
            <Grid item xs={12}>
                <div className={classes.overlay}></div>
                <Calendar
                    showNavigation={true}
                    maxDetail="month"
                    onClickDay={onClickDay}
                    tileClassName={ tileClassName }
                    selectRange = {true}
                    value={[dataInizio, dataFine]}
                />
            </Grid>
                
        </Grid> 
    );
}

export default CustomCalendarDisplay;