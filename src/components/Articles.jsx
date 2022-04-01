import { CardMedia, Button, CardActions, CardContent, Typography, Card } from '@mui/material';
import { maxWidth} from '@mui/system';
import React from 'react'
import { Outlet } from 'react-router-dom';
import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Grid} from '@mui/material/styles'
import { CardActionArea } from '@mui/material';

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
		<ThemeProvider theme={theme}>
		<Card className='box' sx={{ maxWidth: 400, bgcolor:'rgba(20, 20, 20, 0.9)'}}>
<CardActionArea>
	<CardMedia component="img" height="240" image="https://static1.millenium.org/articles/9/38/86/89/@/1578785-cosmo-festival-article_image_bd-3.png" alt="" />
	<CardContent>
		<Typography  variant="h3" color="#8BE4E0">
		Cosmo Festival 2022
		</Typography>

	</CardContent>
	<CardContent>
		<Typography  variant="h6" color="#fff" textAlign={'start'} >
		Une partie de l’équipe MGG Star Citizen s’est rendue au Cosmo Festival à Angers, un événement communautaire autour de l’espace et de Star Citizen. Rencontre avec la communauté, ainsi qu'avec des créateurs et des chercheurs.
		</Typography>
	</CardContent>
	</CardActionArea>
	<CardActions>
		<Button size="small"  color="success"sx={{color:'#8BE4E0'}}>Partager</Button>
	</CardActions>
</Card> 
</ThemeProvider>

)}