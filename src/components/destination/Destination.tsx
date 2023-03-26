import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

import baliImage from '../../assets/bali.png';
import thailandImage from '../../assets/thailand.png';
import { useNavigate } from 'react-router-dom';

const Destination = () => {
  const navigate = useNavigate();

  const handleCardClick = (destinationName: string) => {
    navigate(`/${destinationName}/general-trip-details`);
  };

  return (
    <Container
      maxWidth="md"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}
    >
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Select a destination
      </Typography>
      <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={{ paddingLeft: '20px' }}>
        <Grid item xs={6} justifyContent="center" alignItems="center">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => handleCardClick('thailand')}>
              <CardMedia component="img" height="140" image={thailandImage} alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Thailand
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Friendly and food-obsessed, hedonistic and historic, cultured and curious, Thailand tempts visitors with a smile as golden
                  as the country's glittering temples and tropical beaches. Adored around the world, Thai cuisine expresses fundamental
                  aspects of Thai culture.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6} justifyContent="center" alignItems="center">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea onClick={() => handleCardClick('bali')}>
              <CardMedia component="img" height="140" image={baliImage} alt="green iguana" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Bali
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  The mere mention of Bali evokes thoughts of a paradise. It's more than a place; it's a mood, an aspiration, a tropical
                  state of mind. The rich and diverse culture of Bali plays out at all levels of life, from the exquisite flower-petal
                  offerings placed everywhere.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Destination;
