import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Product = () => {
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        axios
        .get('https://fakestoreapi.com/products')
        .then((response)=>{
            setProducts(response.data);
        })
        .catch((error)=>{
            console.error('Error fetching data: ',error);

        });

    }, [])
    return (
    <div>
        <br /><br /><br />
        <Grid container spacing={4}>
            {products.map((product)=>(
                <Grid item sx={5} md={4} key={product.id}>
                    <Card sx={{maxWidth:345}}>
                        <CardMedia
                            sx={{height:140}}
                            image={product.image}
                            title={product.title}
                            price={product.price}/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" sx={{color:"text.secondary"}}>
                                {product.description}
                            </Typography>
                            <Typography variant="body2" sx={{color:"text.secondary"}}>
                               <b> Price : ${product.price}</b>
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">More Info</Button>
                        </CardActions>

                    </Card>
                </Grid>

            ))}
           

        </Grid>
      
    </div>
  )
}

export default Product
