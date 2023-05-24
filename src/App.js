import Container from '@mui/material/Container';
import Logo from "./assets/logo.png"
import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';
import { MENU_LINKS } from './constants/Menu';
import MenuLink from './components/MenuLink';
import mind from "./assets/mind.png"
import { Typography } from '@mui/material';

function App() {
  return (
    <>
    <Container maxWidth={false} sx={{backgroundColor: "#C8C8C8", paddingBottom: 7}}>
      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={3}
      >
        <Grid item >
            <img src={Logo} alt="logo"/>
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2} direction="row">
            {
              MENU_LINKS.map((item) =>  <Grid item style={{paddingTop: 0, cursor: "pointer", pointerEvents: "auto"}}>
                <MenuLink name={item} />                  
              </Grid>)
            }
          </Grid>
        </Grid>
        <Grid item >
          <Grid container spacing={2} direction="row">
          <Grid item style={{paddingTop: 0 }}>
          <Button variant="outlined" sx={{borderRadius: 50, borderColor: "#3C5671", color: "#3C5671"}}>Sign In</Button>

            </Grid>
            <Grid item style={{paddingTop: 0 }}>
              <Button variant="contained" sx={{borderRadius: 50, background: "#3C5671", borderColor: "#3C5671"}}>Sign Up</Button>
            </Grid>
            </Grid>

        </Grid>
     
      </Grid>
      <Grid   
        container
        direction="row"
        alignItems="center"
        spacing={3}
      >
        <Grid item md={6}>
          <Typography ml={10} component="div">
            <Typography variant="h6" component="h6">
               HEALING THERAPY
            </Typography>
            <Typography variant="h2" component="h2" >
              Choose your own therapist.
            </Typography>
            <Typography variant='h6' mt={3} mb={3}>
              Create a positive change in your life with therapy that focuses on your individual strengths and values.
            </Typography>
            <Button variant="contained" sx={{backgroundColor: "#3C5671"}}> Book an Appointment </Button> 
          </Typography>

        </Grid>
        <Grid item md={6}>
            <img src={mind} style={{width: "-webkit-fill-available" }} alt="Mind"/>
        </Grid>

      </Grid>
      
    </Container>

  <Container  maxWidth={false} sx={{backgroundColor: "#C8C8C8", marginTop: 5 }}>
    <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        xs={{margin: "auto"}}
    >
      <Grid item>
        <Typography variant="h5" component="h5">
               Services
        </Typography>
      </Grid>
      <Grid item>
       <Typography variant="h2" component="h2">
         Experienced in multiple therapy practices
        </Typography>
      </Grid>
      <Grid item>
       <Typography variant="h6" component="h6">
          Multiple therapies refer to the integration of different therapeutic modalities to create a comprehensive and personalized treatment plan.
        </Typography>
      </Grid>
    </Grid>
  </Container>
</>
  );
}

export default App;
