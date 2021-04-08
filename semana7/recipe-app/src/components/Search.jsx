import React from 'react'
import axios from 'axios';
import {appId, appKey, link, recipeName} from './ApiSettings'
import { Button, Card } from '@material-ui/core'
import Typography from '@material-ui/core/Typography';
// import './App.css';




export default class Search extends React.Component {

    
      render () {

        
        const searchList = this.props.searchResult.map(({recipe}) => {
            return (
                <Card variant="outlined" className="card">
                <Typography variant="h5" component="h2">{recipe.label}</Typography>
                <img src={recipe.image} />
                <Typography variant="body2" component="p">{recipe.ingredientLines.map((item) => {return <li>{item}</li> })}</Typography>
                </Card>
            )
        })
  
        return (
          <div>
              <input className="input"
              onChange={this.props.onChangeInput} 
              placeholder="Search your recipe... ex: Pancake"
              value={this.props.value}
              />

            <Button variant="outlined" color="secondary" onClick={() => this.props.searchRecipe()}>search</Button>

            {searchList}

          
            
          </div>
        );
      }
      }
  


//       import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function SimpleCard() {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;

//   return (
//     <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="h2">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           adjective
//         </Typography>
//         <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }
