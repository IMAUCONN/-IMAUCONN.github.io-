import React from 'react';
import Layout from '@theme/Layout';
import { Container, Grid } from '@material-ui/core';

function Hello() {

  const prefix = '../../static/img/company_logos';
   {/* Logos of Companies*/}
  const logos = [
    'Accenture', 
    'Cigna',
    'Deloitte',
    'EY',
    'Northeast_Utilities',
    'PWC',
    'Synchrony',
    'The_Hartford',
    'Travelers',
    'UTC',
  ].map(x => `${prefix}/${x}.png`);

  return (
    <Layout>
      <Container maxWidth='xl'>
        <h1 style={{marginTop:10, marginBottom:10}}>Companies That We Have Worked With: </h1>
      <Grid container direction='row' alignItems='center' style={{backgroundColor:'lightgray', paddingLeft: 10, paddingRight:10, borderRadius: 10}}>
         {/* Display the Logos*/}
        {logos.map((x, idx) => (
          <Grid item xs key={`logo:${idx}`}>
            <img src={x}></img>
          </Grid>
        ))}
      </Grid>
      <h1 style={{marginTop:10, marginBottom:10}} >Recruitment</h1>
        <Grid container direction='column' alignItems='center'>
          <Grid item xs>
             {/* This is the paragraph that describes the companys*/}
            <p>A big part of IMA is connecting our students with potential employers. As part of this recruitment process, we strongly encourage companies to host information sessions with our club. This allows recruiters to meet potential candidates prior to the interviewing process and increase awareness of their companies.</p>
          </Grid>
          <Grid item xs>
             {/* Google form */}
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScwv5p0ITxzB0Tt7OA-PTIvalQ5BVzbJtqTbUniQE77PQv0_A/viewform?embedded=true" width="640" height="1500" frameBorder="0">Loading…</iframe>
          </Grid>
      </Grid>
      </Container>
    </Layout>
  );
}

export default Hello;