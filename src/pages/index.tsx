import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

// Material
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Translations
import { Trans } from '@lingui/macro';
import { loadTranslation } from '@utils/LinguiUtils';

// Atoms
import Text from '@atoms/Text';

// Layout
import LayoutBase from 'layouts/base/';

import { gsap } from "gsap";
import { useEffect, useRef } from 'react';

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

  const textRef = useRef(null);

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
  });

  return (
    <>
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
            <Text text={'Pin a footer to the bottom of the viewport. The footer will move as the main element of the page grows.'}></Text>
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
      </div>
    </LayoutBase>
    </>
  )
}

export default Home
