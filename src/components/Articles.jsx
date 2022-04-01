import { CardMedia, Button, CardActions, CardContent, Typography, Card } from '@mui/material';
import { maxWidth } from '@mui/system';
import React from 'react'
import { Outlet } from 'react-router-dom';
import '../App.css';

export default function Articles() {
return (

<Card className='box' sx={{ maxWidth: 200}}>
	<CardMedia component="img" height="140" image="/static/images/cards/contemplative-reptile.jpg" alt="green iguana" />
	<CardContent>
		<Typography gutterBottom variant="h5" component="div">
			Lizard
		</Typography>
		<Typography variant="body2" color="text.secondary">
			Lizards are a widespread group of squamate reptiles, with over 6,000
			species, ranging across all continents except Antarctica
		</Typography>
	</CardContent>
	<CardActions>
		<Button size="small">Share</Button>
		<Button size="small">Learn More</Button>
	</CardActions>
</Card>

)}