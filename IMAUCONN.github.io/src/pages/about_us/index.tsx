import React, { useState } from 'react';
import Layout from '@theme/Layout';
import { makeStyles, Theme, useTheme, createStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { FormatBold } from '@material-ui/icons';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const eboard = [
  {
    name: "Jessica Roberts",
    year: "Junior",
    position: "President",
    major: "MIS",
    email: "jessica.r.roberts@uconn.edu",
    paragraph: "My name is Jessica Roberts...",
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath: '../../static/img/headshots/president.png',
  },
  {
    name: "Bob Fisk",
    year: "Junior",
    position: "Vice President",
    major: "MIS",
    email: "robert.fisk_jr@uconn.edu",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'Bird',
    imgPath: '../../static/img/headshots/vice_president.png',
  },
  {
    name: "Maciej Kossuth",
    year: "Junior",
    position: "Secretary",
    major: "MIS",
    email: "maciej.kossuth@uconn.edu",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:'../../static/img/headshots/secretary.png',
  },
  {
    name: "Suyang Xu",
    year: "Junior",
    position: "Treasurer",
    major: "MIS",
    email: "suyang.xu@uconn.edu",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'Bali, Indonesia',
    imgPath: '../../static/img/headshots/treasurer.png'
  },
  {
    name: "Jody Kung",
    year: "Junior",
    position: "Chief Marketing Officer",
    major: "MIS",
    email: "jody.kung@uconn.edu",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'Goč, Serbia',
    imgPath:
    '../../static/img/headshots/cmo.png',
  },
  {
    name: "Robert Damjanovich",
    year: "Sophomore",
    position: "Chief Technology Officer",
    major: "Finance",
    email: "robert.damjanovich@uconn.edu",
    paragraph: "skdl;fgjdlsk;jds;lkfajs;",
    label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
    imgPath:'../../static/img/headshots/cto.png',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing(4),
    },
    img: {
      height: 255,
      display: 'block',
      maxWidth: 255,
      overflow: 'hidden',
      width: '100%',
    },
  }),
);

export default function TextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = eboard.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1 == eboard.length ? 0 : prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1 == -1 ? eboard.length - 1 : prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Layout>
      <Container maxWidth='xl'>
      <Grid container direction='column'>
          <Grid item xs>
            <h1>About us</h1>
          </Grid>
          <Grid item>
            <h2>Who we are:</h2> 
          </Grid>
          <Grid container direction='row'>  
            <Grid item xs justify='flex-start'>
              <Container maxWidth='md'>   
                  <p>The Information Management Association (IMA) is a student-run organization, at the University of Connecticut, that provides resources for students interested in the field of Information Technology. We allow students to develop their professional skill-set by connecting them to relevant job opportunities, all while creating an inviting community.</p>
                  <p>Our meetings and events involve inviting IT representatives from various industries to connect with students and teach them about the industry, their specific companies, and potential job opportunities. We also focus on professional development by offering networking opportunities, resume building workshops, and mock interviews.</p>
                  <p>Together we create a network of individuals passionate about information systems, analytics, and industry technology. </p> 
              </Container>
            </Grid>
            <Grid item xs justify='flex-end'>
            <img src="https://www.business.uconn.edu/wp-content/uploads/sites/969/2015/09/2015-09-30_bschool.jpg"></img>  
            </Grid>
          </Grid >
          <Grid item>
            <h2>Meet the Executive Board:</h2> 
          </Grid>
          <Grid item >
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {eboard.map((step, index) => (
                <div key={step.label} className={classes.root}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Grid container direction='row' justify='center' spacing={9} >
                    <Grid item>
                    <p> {step.paragraph}</p>
                    </Grid>
                    <Grid item>
                      <img className={classes.img} src={step.imgPath} alt={step.label} />
                    </Grid>
                    <Grid item >
                      <Grid container direction= 'column'>
                          <text><h3>{step.position}</h3></text>
                          <text>{step.name }</text> 
                          <text>{step.year }</text> 
                          <text>{step.major }</text> 
                          <a href = {`mailto: ${step.email}`}><text>{step.email}</text></a> 
                      </Grid>
                    </Grid>
                  </Grid>) : null}
              </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={<Button size="small" onClick={handleNext}> Next <KeyboardArrowRight /> </Button>}
              backButton={<Button size="small" onClick={handleBack}> <KeyboardArrowLeft/>Back</Button>}
            />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}