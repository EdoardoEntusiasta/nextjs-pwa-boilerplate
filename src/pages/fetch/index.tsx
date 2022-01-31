import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';

// Material
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';


// Translations
import { Trans } from '@lingui/macro';
import { loadTranslation } from '@utils/LinguiUtils';



// Layout
import LayoutBase from 'layouts/base/';

// Gsap
import { gsap } from "gsap";

// Drafts
import { UsersService } from '@mytools/services/UserService';
import { CoreResponseModel } from '@core/models/Response.model';
import { UserModel } from '@mytools/models/UserModel';


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


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const Blog: NextPage = (props) => {

  const userService = new UsersService();

  const [ loading, setLoading ] = useState(true);
  const [ data, setData ] = useState([]);

  const textRef = useRef(null);

  useEffect(() => {
    userService.get().then((res: CoreResponseModel) => {
      setData(res.getData());
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Entuasiasta&apos;s pwa boilerplate blog</title>
      </Head>
      <LayoutBase>
        <div ref={textRef}>
          <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="md">
            <Typography variant="h2" component="h1" gutterBottom>
              Fetch
            </Typography>
            <Box>
            {
              ! loading ?
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell><Trans>Name</Trans></TableCell>
                        <TableCell align="right"><Trans>Surname</Trans></TableCell>
                        <TableCell align="right"><Trans>Birth date</Trans></TableCell>
                        <TableCell align="right"><Trans><Trans>Age</Trans></Trans></TableCell>
                        <TableCell align="right"><Trans>Certs.</Trans></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.map((user: UserModel) => (
                        <TableRow
                          key={user.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {user.name}
                          </TableCell>
                          <TableCell align="right">{user.surname}</TableCell>
                          <TableCell align="right">{user.birthdate}</TableCell>
                          <TableCell align="right">{user.getAge()}</TableCell>
                          <TableCell align="right">{user.totalCerts()}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              : <CircularProgress />
            }
            </Box>
          </Container>
        </div>
      </LayoutBase>
    </>
  )
}

export default Blog