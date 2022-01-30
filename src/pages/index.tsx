import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

// Material
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// Translations
import { Trans } from '@lingui/macro';
import { loadTranslation } from '@coreHelpers/LinguiUtils';


// Atoms
import Text from '@atoms/Text';


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


function Copyright() {
  return (
    <Typography sx={{color: '#DDDDDD'}} variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Home: NextPage = (props) => {
  return (
    <>
    <Head>
      <title>Entuasiasta&apos;s pwa boilerplate</title>
    </Head>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Trans>Home</Trans>
          </Typography>
          
          <Button color="inherit">
            <Trans>Login</Trans>
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
      <Box
      sx={{
        display: 'flex',
        backgroundColor: 'rgb(0, 30, 60)', 
        flexDirection: 'column',
        minHeight: '100vh',
        color: 'white'
      }}
    >
      <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography variant="h2" component="h1" gutterBottom>
            <Trans>Welcome to boilerplate</Trans>
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            <Text text={'Pin a footer to the bottom of the viewport. The footer will move as the main element of the page grows.'}></Text>
          </Typography>
          <Typography variant="body1">Sticky footer placeholder.</Typography>
        </Container>
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: 'rgb(45 57 67)'
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </>
  )
}

export default Home
