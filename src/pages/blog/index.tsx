import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react';

// Material
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Translations
import { Trans } from '@lingui/macro';
import { loadTranslation } from '@utils/LinguiUtils';


// Layout
import LayoutBase from 'layouts/base/';

// Gsap
import { gsap } from "gsap";

// Drafts
import { UsersService } from '@mytools/services/UserService';

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


const Blog: NextPage = (props) => {

  const userService = new UsersService();

  userService.get().then((res) => {
    console.log(res);
  });

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
  }, []);

  return (
    <>
      <Head>
        <title>Entuasiasta&apos;s pwa boilerplate blog</title>
      </Head>
      <LayoutBase>
        <div ref={textRef}>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
              Blog
            </Typography>
          </Container>
        </div>
      </LayoutBase>
    </>
  )
}

export default Blog