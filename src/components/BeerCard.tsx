import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import { useAtom } from 'jotai';
import { Beer } from '../types';
import { addToBasketAtom } from './BeerBasket';

const BeerCard = (props: { beer: Beer }) => {
    const { beer } = props;
    const [, addBeer] = useAtom(addToBasketAtom);
    return (
        <Card
            key={beer.id}
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <CardMedia
                component="img"
                sx={{ width: 41, height: 151 }}
                image={beer.image_url}
                alt="green iguana"
            />
            <CardContent
                sx={{
                    width: 200,
                    height: 80,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Typography color="text.primary" gutterBottom>
                    {beer.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {beer.tagline}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => {
                        addBeer(beer);
                    }}
                >
                    Add to basket
                </Button>
            </CardActions>
        </Card>
    );
};

export default BeerCard;
