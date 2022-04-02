import { CardMedia, Button, CardActions, CardContent, Typography, Card, Cards } from '@mui/material';
import React from 'react'
import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const theme = createTheme();

theme.typography.h3 = {
  fontSize: 
	'22pt',
};
theme.typography.h6 = {
  fontSize: 
	'12pt',
};


export default function Articles() {
	return (

<Grid justifyContent={'center'} container spacing={0} xs={12} key={Articles.id} >
<ThemeProvider theme={theme}>


<Grid item xs={3}>
<Card  sx={{ maxWidth: 500, bgcolor:'rgba(20, 20, 20, 0.9)'}}>
	<CardActionArea className='boxCard' to="/Propos">
	<a href="https://www.millenium.org/games/game-376">
	<CardMedia component="img" height="240" image="https://cdna.artstation.com/p/assets/images/images/027/839/028/large/julien-garoseau-gomes-gladius-concept-screen-ui.jpg?1592708367" alt="" />
	<CardContent>
		<Typography className='gE' variant="h3">
		Star Citizen: UI Concept "Aegis Dynamics"
		</Typography>

	</CardContent>
	<CardContent>
		<Typography  variant="h6" color="#A1A1A6" textAlign={'start'} >
		For the sake of an article on Millenium Star Citizen, I undertook to recreate the Concept Screen UI shown in the show "Inside Star Citizen". Except for the fonts, I think I did well in 4 hours of work.
		</Typography>
	</CardContent>
	</a>	
	</CardActionArea>
	<CardActions >
		<Button size="small"  color="success"sx={{color:'#fff'}}>Partager</Button>
	</CardActions>
</Card> 
</Grid>

<Grid item xs={3}>
<Card  sx={{ maxWidth: 500, bgcolor:'rgba(20, 20, 20, 0.9)'}}>

	<CardActionArea className='boxCard'>
	
	<CardMedia component="img" height="240" image="https://cdna.artstation.com/p/assets/images/images/027/584/976/large/julien-garoseau-gomes-ascenseura.jpg?1591950082" alt="" />
	
	<CardContent>
		<Typography className='gE' variant="h3">
		Star Citizen: UI Concept "Crusader Industries"
		</Typography>

	</CardContent>

	<CardContent>
		<Typography  variant="h6" color="#A1A1A6" textAlign={'start'} >
		Une partie de l’équipe MGG Star Citizen s’est rendue au Cosmo Festival à Angers, un événement communautaire autour de l’espace et de Star Citizen. Rencontre avec la communauté, ainsi qu'avec des créateurs et des chercheurs.
		</Typography>
	</CardContent>
	
	</CardActionArea>

	<CardActions >
		<Button size="small"  color="success"sx={{color:'#fff'}}>Partager</Button>
	</CardActions>

</Card> 
</Grid>


</ThemeProvider>
</Grid>

)}