
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import { StyledBar } from './styled';
import { Trans } from '@lingui/macro';
import { zIndex } from '@theme/DesignSystem/Variables';
import TextLink from '@atoms/TextLink';

function Copyright() {
  return (
    <Typography sx={{color: '#DDDDDD'}} variant="body2" color="text.secondary">
      {'Entusiasta: '}
      <Link color={'inherit'} target="_blank" href="https://github.com/EdoardoEntusiasta/nextjs-pwa-boilerplate">https://github.com/EdoardoEntusiasta/nextjs-pwa-boilerplate</Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const LayoutBase = ({ children }) => {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <StyledBar>
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
          <TextLink href="login">Login</TextLink>
          &nbsp;&nbsp;&nbsp;
          <TextLink href="blog">Blog</TextLink>
        </Toolbar>
      </StyledBar>
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
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="lg">
          { children }
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
              <Trans>If you need more info</Trans>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
      </>
  )
}


export default LayoutBase;