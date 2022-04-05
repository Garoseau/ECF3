import { CardMedia, Button, CardActions, CardContent, Typography, Card, Cards } from '@mui/material';
import React, { useState, useEffect } from 'react'
import '../App.css';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';
import ProdServices from '../services/ProdServices';
import NavbarAdmin from './admin/NavbarAdmin';

const theme = createTheme();
theme.typography.h4 = {
  fontSize: 
	'22pt',
};
theme.typography.h6 = {
  fontSize: 
	'12pt',
};

export default function ArticlesB() {

  const [products, setProducts] = useState([]);//déclaration de l'état initialisé à un tableau vide

  useEffect(() => {
    ProdServices.getProducts()
      .then(res => res.json())
      .then(data => setProducts(data))//lorsqu'il y a succès on met à jour l'état avec (data)
      .catch(err => console.error(err))//catch est exécuté lorsqu'il y a erreur
  }, []);
  console.log(products)

return (
	<>
	<NavbarAdmin></NavbarAdmin>
	{products && products.map(product => (
	<Grid justifyContent={'center'} container spacing={6} rowSpacing={6} xs={12} key={product.id}
	sx={{mt: 6, maxHeight:760}}>

	<ThemeProvider theme={theme}>

		<Grid item xs={'auto'}>
		
			<Card 
			sx={{ maxWidth: 1920, bgcolor:'rgba(20, 20, 20, 0.8)', maxHeight:760, minHeight:760,borderRadius: 3, backdropFilter: "blur(5px)", border: 1, borderColor: "#2B2B2B"}}>
				<CardActionArea 
				className='boxCard' 
				>
						<CardMedia 
						component="img" 
						height="500"
						image={product.img}
						alt="" />

						<CardContent>
							<Typography className='gradient gA anime' variant="h4">
							{product.titre}
							</Typography>
						</CardContent>

						<CardContent>	
							<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
							{product.auteur}
							</Typography>
							<Typography variant="h6" color="#A1A1A6" textAlign={'start'}>
							{product.date}
							</Typography>
						</CardContent>
						

				</CardActionArea>
				<CardActions>
					<Button size="small" color="success" sx={{color:'#fff'}}>Partager</Button>
				</CardActions>
			</Card>

		</Grid>

	</ThemeProvider>
	
</Grid>
))}
</>
)}