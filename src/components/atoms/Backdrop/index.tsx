/** 
 * For this component I have to thank two smart guys 
 * Jacopo Panzera https://github.com/Sliver02
 * and 
 * Andrea Caccia 
 */

import { StyledBackdrop } from './styled';
import { IBackdrop } from './interfaces';
import { Tween, PlayState } from 'react-gsap';
import { useState, useEffect } from 'react';

const Backdrop = ({ open, on_click, closable }: IBackdrop) => {
    const [animation, setAnimation] = useState(PlayState.pause);

    useEffect(() => {
        if (open) {
            setAnimation(PlayState.play);
            document.body.style.overflow = 'hidden';
        } else {
            setAnimation(PlayState.reverse);
            document.body.style.removeProperty('overflow');
        }
    }, [open]);

    const handleClick = (e) => {
        if (closable) {
            setAnimation(PlayState.reverse);
        }
        if(on_click) {
            on_click(e);
        }
    }

    return (
        <Tween
            from={{ opacity: 0, display: 'none' }}
            to={{ opacity: 1, display: 'block' }}
            duration={0.5}
            playState={animation}
        >
            <StyledBackdrop onClick={handleClick}/>
        </Tween>
    );
};

export default Backdrop;
