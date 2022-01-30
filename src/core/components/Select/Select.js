import React, { useState } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import { String } from '../../Helpers/Helpers';
import Style  from './Style';
import { Box } from '@material-ui/core';
import {useQuery} from 'react-query';

/**
 * Core select component
 * @param {*} props 
 * @returns 
 */

const CoreSelectComponent = (props) => {

    const classes = Style();
    let compProps = {
        queryName: String.random(),
        customList: [],
        service: null,
        onChange: null,
        items: [],
        id: `select-${Math.floor(Math.random(10, 1000))}`,
        label: String.random(),
        itemLabel: 'etichetta',
        cacheTime: 0,
        // Preselected options
        preselectedItem: props.preselectedItem,
        comparisonProperty: 'id',
        emptyVal: false,
        emptyValValue: 0,
        getBackParam: null
    }

    // todo optional cache
    Object.assign(compProps, props);

    const getPreselectedItem = (list) => {
        const output = (isNaN(compProps.preselectedItem) ? compProps.preselectedItem 
            : list.find((item, index) => compProps.comparisonProperty ? item[compProps.comparisonProperty] === compProps.preselectedItem 
            : index === compProps.preselectedItem));
        return output;
    }

    const [selectedItem, setSelectedItem] = useState(getPreselectedItem(compProps.customList));

    React.useEffect(() => {
        if(compProps.onChange) {
            compProps.onChange(compProps.getBackParam ? {getBackParam: compProps.getBackParam, value: selectedItem} : selectedItem);
        }
    }, [selectedItem]);


    const { isLoading, error, data } = useQuery(compProps.queryName ? String.slug(compProps.queryName) : 'items', () => 
        compProps.service ? compProps.service.get() : { data: compProps.customList }, {
            refetchOnWindowFocus: false,
            cacheTime: compProps.cacheTime
        }
    )

    // Preselect default after service data has been loaded
    React.useEffect(() => {
        if(!isLoading && data) {
            if(compProps.preselectedItem) {
                setSelectedItem(getPreselectedItem(data.data));
            }
        }
    }, [data]);

    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };

    return (
        <Box>
            {isLoading || !data ? (
                <CircularProgress size={20} disableShrink />
            ) : (
                <Box>
                    <Select
                        className={classes.select}
                        id={compProps.id}
                        value={selectedItem ? selectedItem : ''}
                        onChange={handleChange}
                        label={compProps.label}>
                        {
                            compProps.emptyVal ? 
                                <option key={0} value={compProps.emptyValValue}>
                                    {compProps.emptyVal}
                                </option>
                            : null
                        }
                        {data.data.map((item, keyIndex) => {
                            return (
                                <MenuItem key={keyIndex} value={item}>
                                    {item[compProps.itemLabel]}
                                </MenuItem>
                            )
                        })}
                    </Select>
                </Box>
            )}
        </Box>
    )
};

export default CoreSelectComponent;
