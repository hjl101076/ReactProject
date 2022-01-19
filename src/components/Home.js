import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Drawer from '@material-ui/core/Drawer';

const styles = {
    media: {
      height: 300
    }
};



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        };
        this.state2 ={
            toggle: false,
        }
    }
    handleDrawerToggle = () => this.setState({ toggle: !this.state.toggle })
    handleDrawerToggle2 = () => this.setState({ toggle: !this.state2.toggle })
    render() {
        const { classes } = this.props;
        const clickMe = () => {

            window.location.href = "#/texts"
        
        }

        return (
            <><Card style={{ width: '28%',maxWidth: 500 ,float:'left', marginLeft:'10%'}}>
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
                    <Button onClick={this.handleDrawerToggle} size="small">Learn More</Button>
                </CardActions>

            </Card>
            <Card style={{ width: '28%',maxWidth: 500 , float:'left',marginLeft:'3%'}}> 
            <CardMedia
                    className={classes.media}
                    style={styles.media}
                    component="img"
                    image="img/vr-1.jpg"
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
                    <Button onClick={this.handleDrawerToggle2} size="small">Learn More</Button>
                </CardActions>
            </Card>
            <Card style={{ width: '28%',maxWidth: 500 ,float:'left', marginLeft:'3%'}}> 
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
            <Drawer open={this.state.toggle}>
                     <MenuItem onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/">
                                Home
                            </Link>
                      </MenuItem>
                  <div style={{width : 300}}>
                      dd
                  </div>
             </Drawer>
             <Drawer open={this.state2.toggle}>
                     <MenuItem onClick={this.handleDrawerToggle2}>
                            <Link component={RouterLink} to="/">
                                Home
                            </Link>
                      </MenuItem>
                  <div style={{width : 300}}>
                     dsdsd
                  </div>
             </Drawer>
  
            </>
          
        );
    }
}

export default withStyles(styles)(Home);
