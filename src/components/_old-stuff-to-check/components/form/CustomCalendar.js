import React, { Component } from 'react';
//import Calendar from 'react-calendar';
import Calendar from 'react-calendar/dist/entry.nostyle';
import '../css/calendar.css';
import { withStyles, makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventIcon from '@material-ui/icons/Event';

var moment = require('moment');

const useStyles = makeStyles({
    ferieForzate: {
        backgroundColor: '#d333',
    },
    noAssenze: {
        backgroundColor: '#33d3',
    },
    primary: {
      fontSize: '10px',
    },
    icon:{
        minWidth: '30px',
    }
});


const CustomCalendar = (props) => {

    let date = new Date();

    let tmp_no_assenze = [  new Date(2020,2,30), 
                            new Date(2020,2,31),
                        ]

    let tmp_ferie_forzate = [   new Date(2020,2,26), 
                                new Date(2020,2,27),]

    //console.log(tmp_no_assenze);
    //console.log(tmp_ferie_forzate);
                                
    const [disabledDates, setDisabledDates] = React.useState([]);
    const [dateNoAssenze, setDateNoAssenze] = React.useState(tmp_no_assenze);
    const [dateFerieForzate, setDateFerieForzate] = React.useState(tmp_ferie_forzate);
    const [maxData, setMaxData] = React.useState( new Date(date.setMonth(date.getMonth()+1)) );
    const [dataInizio, setDataInizio] = React.useState(null);
    const [dataFine, setDataFine] = React.useState(null);
    
    React.useEffect(() => {
        async function getDisabledDays() {
            const response = await fetch('/api/calendario/disabilitati');
            const body = await response.json();

            let tmp = [];

            body.date.forEach((item, index) => {
                tmp.push(new Date(item));
            });

            setDisabledDates(tmp);
        }
        getDisabledDays();
    }, []);

    const handleChange = date => {
        
        setDataInizio(date[0]);
        setDataFine(date[1]);
        
    };

    const onClickDay = value => {
        
        let date = value;

        if( dateNoAssenze.some( dateNoAssenze =>
                date.getFullYear() === dateNoAssenze.getFullYear() &&
                date.getMonth() === dateNoAssenze.getMonth() &&
                date.getDate() === dateNoAssenze.getDate()
            )
            || 
            dateFerieForzate.some( dateFerieForzate =>
                date.getFullYear() === dateFerieForzate.getFullYear() &&
                date.getMonth() === dateFerieForzate.getMonth() &&
                date.getDate() === dateFerieForzate.getDate()
            )

        ){
            console.log('no click!')
        } else{
            console.log('Clicked day: ' + value)
        } 
        
    };

    function tileClassName({ date }) {
        //console.log('pre: ' + date );
        if( dateNoAssenze.some( dateNoAssenze =>
                date.getFullYear() === dateNoAssenze.getFullYear() &&
                date.getMonth() === dateNoAssenze.getMonth() &&
                date.getDate() === dateNoAssenze.getDate()
            )
        ){
            //console.log('questa si');
            return classes.noAssenze

        }else if( dateFerieForzate.some( dateFerieForzate =>
                    date.getFullYear() === dateFerieForzate.getFullYear() &&
                    date.getMonth() === dateFerieForzate.getMonth() &&
                    date.getDate() === dateFerieForzate.getDate()
                )
        ){
            return classes.ferieForzate
        }else{
            return null;
        }  
    };

    function tileDisabled({ date }) {
        return false;
        //console.log('pre: ' + date );
        if( dateNoAssenze.some( dateNoAssenze =>
                date.getFullYear() === dateNoAssenze.getFullYear() &&
                date.getMonth() === dateNoAssenze.getMonth() &&
                date.getDate() === dateNoAssenze.getDate()
            )
        ){
            return true

        }else if( dateFerieForzate.some( dateFerieForzate =>
                    date.getFullYear() === dateFerieForzate.getFullYear() &&
                    date.getMonth() === dateFerieForzate.getMonth() &&
                    date.getDate() === dateFerieForzate.getDate()
                )
        ){
            return true
        }else{
            return false;
        }  
    };

    const classes = useStyles();

    return (
        <div className="container">

            <Calendar
                maxDetail="month"
                minDate={new Date()}
                maxDate={maxData}
                selectRange = {true}
                tileDisabled={tileDisabled }
                onChange={handleChange}
                onClickDay={onClickDay}
                tileClassName={ tileClassName }
            />
            
            <List component="nav" dense={true}>

                <ListItem>
                    <ListItemIcon classes={{ root: classes.icon }}>
                        <EventIcon fontSize="small"  style={{ color: 'red' }} />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} primary="Periodo in cui non puoi prendere ferie" />
                </ListItem>

                <ListItem>
                    <ListItemIcon classes={{ root: classes.icon }}>
                        <EventIcon fontSize="small"  style={{ color: 'blue' }} />
                    </ListItemIcon>
                    <ListItemText classes={{ primary: classes.primary }} primary="Periodo di ferie forzate" />
                </ListItem>  

            </List>

        </div>        
    );
}

export default CustomCalendar;