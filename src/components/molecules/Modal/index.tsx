import { StyledModal, Dialog, ContentWrapper, Content, Footer } from './styled';
import { IModal } from './interfaces';
import { useEffect, useState } from 'react';
import { getModifiers } from '@utils/helpers';
// import Icon from '@components/atoms/Icon';
import Backdrop from '@atoms/Backdrop';
import { Tween, PlayState } from 'react-gsap';

const Modal = ({ open, set_open, footer, children, modifiers }: IModal) => {
    const [render, setRender] = useState(false);
    const [dialogTl, setDialogTl] = useState(PlayState.pause);

    useEffect(() => {
        if (open) {
            setRender(true);
        } else {
            setTimeout(() => {
                setRender(false);
            }, 500);
        }
        open ? setDialogTl(PlayState.play) : setDialogTl(PlayState.reverse);
    }, [open]);

    return (
        render && (
            <>
                <Backdrop open={open} />
                <StyledModal {...getModifiers(modifiers, { footer })}>
                    <Tween
                        from={{ y: '-50%', opacity: 0 }}
                        duration={0.5}
                        ease="Quart.easeOut"
                        playState={dialogTl}
                    >
                        <Dialog>
                            {/*<Icon icon="cross" on_click={() => set_open(false)} />*/}
                            <ContentWrapper>
                                <Content>{children}</Content>
                            </ContentWrapper>
                            {footer && <Footer>{footer}</Footer>}
                        </Dialog>
                    </Tween>
                </StyledModal>
            </>
        )
    );
};

export default Modal;
