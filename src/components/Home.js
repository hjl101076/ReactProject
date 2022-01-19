import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    media: {
      height: 300
    }
};



class Home extends React.Component {
    render() {
        const { classes } = this.props;
        const clickMe = () => {

            window.location.href = "#/texts"
        
        }
        return (
            <><Card style={{ maxWidth: 500,float:'left', marginLeft:300}}>
                <CardMedia
                    className={classes.media}
                    style={styles.media}
                    component="img"
                    image="img/hand-1.jpg"
                    alt="green iguana" />
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
                    <Button onClick={clickMe} size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card style={{ maxWidth: 500 , marginLeft:850}}> 
            <CardMedia
                    className={classes.media}
                    style={styles.media}
                    component="img"
                    image="img/sleek.jpg"
                    alt="green iguana" />
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
                    <Button onClick={clickMe} size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
            </>
          
        );
    }
}

export default withStyles(styles)(Home);
