import { CardMedia, Button, CardActions, CardContent, Typography, Card } from '@mui/material';
import { maxWidth } from '@mui/system';
import React from 'react'
import { Outlet } from 'react-router-dom';
import '../App.css';

export default function Articles() {
	return (
		
		<Card className='box' sx={{ maxWidth: 200}}>
    <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
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

		// <div class="grid">
		// 		<div class="grid1">
		// 				<a href="https://www.artstation.com/artwork/mDZYa8">1</a>
		// 		</div>
		// 		<div class="grid2">
		// 				<a href="https://www.artstation.com/artwork/lVPore">Star Citizen - Drake Interface (Fan made)</a>
		// 		</div>
		// 		<div class="grid3">
		// 				<a href="https://www.artstation.com/artwork/GaXg6Q">Star Citizen: Concept Screen UI
		// 				</a>
		// 		</div>
		// 		<div class="grid4">
		// 				<a href="https://www.artstation.com/artwork/9eLG1q">Stands</a>
		// 		</div>
		// 		<div class="grid5">
		// 				<a href="https://www.artstation.com/artwork/EVgGNq">5</a>
		// 		</div>
		// 		<div class="grid6">
		// 				<a href="https://www.artstation.com/artwork/xzKRdY">6</a>
		// 		</div>
		// 		<div class="grid7">
		// 				<a href="https://www.millenium.org/guide/370476.html">9</a>
		// 		</div>
		// 		<div class="grid8">
		// 				<a href="https://www.millenium.org/news/369129.html">8</a>
		// 		</div>
		// 		<div class="grid9">
		// 				<a href="https://www.millenium.org/news/363453.html">9</a>
		// 		</div>
		// </div>

	)
}
