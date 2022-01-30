import React, { useEffect, useRef } from 'react';
import Style  from './Style';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { Box, FormControl } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';



const CoreMultiFunctionButton = (props) => {
    const classes = Style();

    let compProps = {
        options: props.options || ['Option 1', 'Option 2'],
        selectedIndex: props.selectedIndex != null ? props.selectedIndex : 0,
        onSelection: props.onSelection,
        disabled: props.disabled,
        className: props.className,
        loadingTemplate: props.loadingTemplate
    }

    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(compProps.selectedIndex);

    // Instance variables
    const isInitialMount = useRef(true);
    const anchorRef = React.useRef(null);

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
         } else {
            notifyParent();
         }
    }, [selectedIndex]);

    const notifyParent = () => {
        if(compProps.onSelection) {
            compProps.onSelection(selectedIndex)
        }
    }

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };


    return (
        <Box>                
            <FormControl variant="filled" fullWidth={true} className={classes.formControl}>
                <ButtonGroup className={compProps.className} disabled={compProps.disabled} variant="contained" ref={anchorRef} aria-label="split button">
                    <Button className={classes.flex1} onClick={notifyParent}>
                        { 
                            compProps.loadingTemplate ? 
                                compProps.loadingTemplate
                            :   compProps.options[selectedIndex] 
                        }
                    </Button>
                    <Button
                        className={classes.iconButton}
                        size="small"
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="select merge strategy"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                    >
                        <ArrowDropDownIcon />
                    </Button>
                </ButtonGroup>
                <Popper className={classes.selectionDiv} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                            }}
                            >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList id="split-button-menu">
                                        {
                                            compProps.options.map((option, index) => (
                                                <MenuItem
                                                    key={option}
                                                    disabled={index === 2}
                                                    selected={index === selectedIndex}
                                                    onClick={(event) => handleMenuItemClick(event, index)}>
                                                    {option}
                                                </MenuItem>
                                            ))
                                        }
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </FormControl>
        </Box>
    )
}


export default CoreMultiFunctionButton;