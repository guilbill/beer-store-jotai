import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { atom, useAtom } from "jotai";
import { useMemo } from "react";
import { Beer } from "../types";
import { addToBasketAtom, basketAtom } from "./BeerBasket";

const BeerCard = (props: { beer: Beer }) => {
  const { beer } = props;
  const [, addBeer] = useAtom(addToBasketAtom);
  const [basket] = useAtom(basketAtom);
  const stock = useMemo(
    () => basket.find((b) => b.beer.id === beer.id)?.quantity,
    [basket, beer.id]
  );

  // const beerStockAtom = useMemo(
  //   () =>
  //     atom(
  //       (get) => get(basketAtom).find((b) => b.beer.id === beer.id)?.quantity
  //     ),
  //   [beer.id]
  // );
  // const [stock] = useAtom(beerStockAtom);

  return (
    <Card
      key={beer.id}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
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
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography color="text.primary" gutterBottom>
          {beer.name} - {stock}
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
