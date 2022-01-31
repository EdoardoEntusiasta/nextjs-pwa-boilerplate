import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';

// Material
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';

// Translations
import { Trans } from '@lingui/macro';
import { loadTranslation } from '@utils/LinguiUtils';

// Atoms
import Text from '@atoms/Text';
import { Button } from '@atoms/Button';

// Layout
import LayoutBase from 'layouts/base/';

// Gsap
import { gsap } from "gsap";

// Molecules
import Modal from '@molecules/Modal';

// Drafts
import LoginForm from '@mytools/components/LoginForm';
import { UsersService } from '@mytools/services/SampleService';

/**
 * If you export a function called getStaticProps (Static Site Generation) from a page, 
 * Next.js will pre-render this page at build time using the props returned by getStaticProps.
 * https://nextjs.org/docs/basic-features/data-fetching/get-static-props
 * SYSTEM FUNCTION
 * @param ctx 
 * @returns 
 */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = await loadTranslation(
    ctx.locale!,
    process.env.NODE_ENV === 'production'
  )
  return {
    props: {
      translation
    }
  }
}


const Home: NextPage = (props) => {

  const userService = new UsersService();

  userService.get();

  const textRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
          {
              opacity: 0,
              y: '40px'
          },
          {
              opacity: 1,
              y: 0,
              duration: 2,
          }
      );
  }, []);

  return (
    <>
    <Modal open={modalOpen} set_open={setModalOpen}>
      <LoginForm></LoginForm>
    </Modal>
    <Head>
      <title>Entuasiasta&apos;s pwa boilerplate</title>
    </Head>
    <LayoutBase>
      <div ref={textRef}>
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            <Trans>Welcome to boilerplate</Trans>
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            <Text text={<Trans>Boilerplate intro</Trans>}></Text>
          </Typography>
          <Typography variant="body1"><Trans>Wish you good work</Trans></Typography>
          <Box mt={1.5}>
            <Button label={<Trans>Login modal</Trans>} variant='contained' onClick={() => setModalOpen(true)} />
          </Box>
          <Box mt={5}>
            <Link href="/it">Italiano</Link>
            &nbsp;|&nbsp;
            <Link href="/en-US">English</Link>
          </Box>
        </Container>
      </div>
    </LayoutBase>
    </>
  )
}

export default Home
