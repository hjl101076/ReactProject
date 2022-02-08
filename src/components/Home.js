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
import * as text from './Texts'
import Hands from './Hand';
import VrLip from './VrLipsync';

const styles = {
    media: {
      height: 300
      
    }
};


   


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false, // left: false,
            top: false,         
            bottom: false,
            right: false,
        };
        
    }

 
    handleDrawerToggle = () => this.setState({ toggle: !this.state.toggle })
    handleDrawerToggle2 = () => this.setState({ top: !this.state.top })
    handleDrawerToggle3 = () => this.setState({ bottom: !this.state.bottom })
    handleDrawerToggle4 = () => this.setState({ right: !this.state.right })

   render() {
    
        const { classes } = this.props;
        const clickMe = () => {

            window.location.href = "#/texts"
        
        }

        const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            } 
            
            this.setState({ [anchor] : open })
          };

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
                    <Button onClick={this.handleDrawerToggle} size="small">Learn More</Button>
                    <Button onClick={clickMe} size="small">Detail</Button>                 
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
                    <Button onClick={this.handleDrawerToggle2}  size="small">Learn More</Button>
                    <Button onClick={clickMe} size="small">Detail</Button>                    
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
                    <Button onClick={this.handleDrawerToggle3} size="small">Learn More</Button>
                    <Button onClick={clickMe} size="small">Detail</Button>                  
                </CardActions>
            </Card>
              <Card style={{ width: '28%', maxWidth: 500, float: 'left', marginLeft: '10%', marginTop: '2%' }}>
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
                      <Button onClick={this.handleDrawerToggle4} size="small">Learn More</Button>
                      <Button onClick={clickMe} size="small">Detail</Button>                    
                  </CardActions>
              </Card>
              <Drawer open={this.state.toggle} onClose={toggleDrawer("toggle", false)}>
                  <Hands />
              </Drawer>

              <Drawer anchor='top' PaperProps={{ style: {  flexDirection: 'row'} }} open={this.state.top} onClose={toggleDrawer('top', false)} >
                  <VrLip />
              </Drawer>

              <Drawer anchor='bottom' PaperProps={{ style: { flexDirection: 'row' } }}open={this.state.bottom} onClose={toggleDrawer('bottom', false)} >
                  <VrLip />
              </Drawer>

              <Drawer anchor='right' open={this.state.right} onClose={toggleDrawer('right', false)}>
                  <Hands />
              </Drawer>

           
  
          
            </>
          
          
        );
    }
}




export default  withStyles(styles)(Home);
