import React from 'react';
import './App.css';
import { Box, Button, ButtonBase, Card, Container, Grid, Icon, Input, Link, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FireplaceIcon from '@mui/icons-material/Fireplace';

import Man from './static/man.png'
import Img1 from './static/img1.png'
import Img2 from './static/img2.png'
import Img3 from './static/img3.png'
import Img4 from './static/img4.png'

function App() {

  const cardData = [
    {
      text1: 'Instant video consultation.',
      text2: 'Connect within 60 seconds.',
      color: '#A3DAC2',
      url: '/',
      imgUrl: Img1
    },
    {
      text1: 'Find the doctors near you.',
      text2: 'Confirmed Appointments.',
      color: '#F0DA69',
      url: '/',
      imgUrl: Img2
    },
    {
      text1: '24/7 medicine.',
      text2: 'Essentials at your doorstep.',
      color: '#E7C2D4',
      url: '/',
      imgUrl: Img3
    },
    {
      text1: 'Lab Tests.',
      text2: 'Simple pickup at your home.',
      color: '#92BDF6',
      url: '/',
      imgUrl: Img4
    }
  ]



  const cardData = [
    {
      text1: 'Instant video consultation.',
      text2: 'Connect within 60 seconds.',
      color: '#A3DAC2',
      url: '/',
      imgUrl: Img1
    },
    {
      text1: 'Find the doctors near you.',
      text2: 'Confirmed Appointments.',
      color: '#F0DA69',
      url: '/',
      imgUrl: Img2
    },
    {
      text1: '24/7 medicine.',
      text2: 'Essentials at your doorstep.',
      color: '#E7C2D4',
      url: '/',
      imgUrl: Img3
    },
    {
      text1: 'Lab Tests.',
      text2: 'Simple pickup at your home.',
      color: '#92BDF6',
      url: '/',
      imgUrl: Img4
    }
  ]


  return (
    <>
    <Container sx={{mt: '15px'}}>
      <Box sx={{
        background: '#E1E1E1',
        padding: '20px 40px',
        borderRadius: '25px',
        mb: '15px'
      }}>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item xs={2}>
            <Link>
              <Typography variant='h5' fontWeight={900}>
                Medcare
              </Typography>
              </Link>
          </Grid>
          <Grid item xs={3} sx={{position: 'relative'}}>
            <SearchIcon
            sx={{
              background: '#F0DA69',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              position: 'absolute',
              zIndex: '1000',
              top: '18px',
              left: '20px',
              boxSizing: 'border-box',
              p: '4px'
            }}></SearchIcon>
            <Input placeholder='Search Here..'></Input>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <Grid container alignItems={'center'}>
              <Link>
                <Typography variant='subtitle2' sx={{textWrap: 'nowrap', }}>
                Healthcare Services
                </Typography>
              </Link>
              <ArrowForwardIosIcon sx={{width: '16px', ml:'3px', rotate: '90deg'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container alignItems={'center'}>
              <Link>
                <Typography color={'FF5C00'} variant='subtitle2' sx={{textWrap: 'nowrap', }}>
                offers
                </Typography>
              </Link>
              <FireplaceIcon sx={{width: '16px', ml:'3px'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container alignItems={'center'}>
              <Link>
                <Typography variant='subtitle2' sx={{textWrap: 'nowrap', }}>
                Cart
                </Typography>
              </Link>
              <ShoppingCartRoundedIcon sx={{width: '16px', ml:'3px'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container alignItems={'center'}>
              <Link>
                <Typography variant='subtitle2' sx={{textWrap: 'nowrap', }}>
                Login
                </Typography>
              </Link>
              <PersonOutlineRoundedIcon sx={{width: '16px', ml:'3px'}}/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box p={'0 20px 15px 20px'} mb={'15px'} position={'relative'} borderRadius={'45px'} bgcolor={'252B61'}>
          <Container sx={{width: 'fit-content'}}>
            <Typography sx={{fontSize: 150, fontWeight: 900}} color={'C6DEFD'}>Healthcare</Typography>
          </Container>
          <Grid container justifyContent={'space-evenly'}>
            <Grid item>
              <Grid container>
                <Icon sx={{background:'#E7C2D4', width: '24px', height: '24px', borderRadius: 50, mr: '5px'}}/><Typography color={'#fff'}>Reduce HbA1c</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Icon sx={{background:'#A3DAC2', width: '24px', height: '24px', borderRadius: 50, mr: '5px'}}/><Typography color={'#fff'}>No more medications</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid padding={'0 20px'} m={'120px 0 0 0'} container justifyContent={'space-between'}>
            <Typography color={'#fff'}>If you are looking for a creative and <br/> easy way to build a website. Vlashex is <br/> the perfect solution.</Typography>
            <Button>
              <Grid container>
                <Box padding={'10px 30px'} borderRadius={'128px'} bgcolor={'#E7C2D4'}><Typography fontSize={12} variant='subtitle2' >Book Consultation</Typography></Box>
                <Box sx={{
                    width:  '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#E7C2D4',
                    ml: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <ArrowForwardIcon sx={{
                    width:  '16px',
                    height: '16px',
                  }}
                  />
                </Box>
              </Grid>
            </Button>
          </Grid>
          <img style={{
            position: 'absolute',
            top: '99px',
            left: '394px',
            width: '350px'
          }} src={Man}/>
      </Box>
      <Grid container justifyContent={'space-between'}>
        {
          cardData.map((value)=>{ 
            return(
              <Card sx={{
                background: value.color,
                width: '24%',
                padding: '30px 15px',
                borderRadius: '25px',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography variant='h5'>{value.text1}</Typography>
                  <Typography variant='subtitle2' fontSize={'10px'}>{value.text2}</Typography>
                </Box>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'space-between'
                }}>
                  <Box sx={{
                    width:  '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#000',
                    ml: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ArrowForwardIcon sx={{
                    color: '#fff',
                    width:  '16px',
                    height: '16px',
                  }}
                  />
                </Box>
                  <img style={{width: '70%'}} src={value.imgUrl}/>
                </Box>
              </Card>
          )})
        }
      </Grid>
    </Container>

    </>
    <>
    <Container sx={{mt: '15px'}}>
      <Box sx={{
        background: '#E1E1E1',
        padding: '20px 40px',
        borderRadius: '25px',
        mb: '15px'
      }}>
        <Grid container spacing={2} alignItems={'center'}>
          <Grid item xs={2}>
            <Link>
              <Typography variant='h5' fontWeight={900}>
                Medcare
              </Typography>
              </Link>
          </Grid>
          <Grid item xs={3} sx={{position: 'relative'}}>
            <SearchIcon
            sx={{
              background: '#F0DA69',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              position: 'absolute',
              zIndex: '1000',
              top: '18px',
              left: '20px',
              boxSizing: 'border-box',
              p: '4px'
            }}></SearchIcon>
            <Input placeholder='Search Here..'></Input>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={2}>
            <Grid container alignItems={'center'}>
              <Link>
                <Typography variant='subtitle2' sx={{textWrap: 'nowrap', }}>
                Healthcare Services
                </Typography>
              </Link>
              <ArrowForwardIosIcon sx={{width: '16px', ml:'3px', rotate: '90deg'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container alignItems={'center'}>
              <Link>
                <Typography color={'FF5C00'} variant='subtitle2' sx={{textWrap: 'nowrap', }}>
                offers
                </Typography>
              </Link>
              <FireplaceIcon sx={{width: '16px', ml:'3px'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container alignItems={'center'}>
              <Link>
                <Typography variant='subtitle2' sx={{textWrap: 'nowrap', }}>
                Cart
                </Typography>
              </Link>
              <ShoppingCartRoundedIcon sx={{width: '16px', ml:'3px'}}/>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Grid container alignItems={'center'}>
              <Link>
                <Typography variant='subtitle2' sx={{textWrap: 'nowrap', }}>
                Login
                </Typography>
              </Link>
              <PersonOutlineRoundedIcon sx={{width: '16px', ml:'3px'}}/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box p={'0 20px 15px 20px'} mb={'15px'} position={'relative'} borderRadius={'45px'} bgcolor={'252B61'}>
          <Container sx={{width: 'fit-content'}}>
            <Typography sx={{fontSize: 150, fontWeight: 900}} color={'C6DEFD'}>Healthcare</Typography>
          </Container>
          <Grid container justifyContent={'space-evenly'}>
            <Grid item>
              <Grid container>
                <Icon sx={{background:'#E7C2D4', width: '24px', height: '24px', borderRadius: 50, mr: '5px'}}/><Typography color={'#fff'}>Reduce HbA1c</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Icon sx={{background:'#A3DAC2', width: '24px', height: '24px', borderRadius: 50, mr: '5px'}}/><Typography color={'#fff'}>No more medications</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid padding={'0 20px'} m={'120px 0 0 0'} container justifyContent={'space-between'}>
            <Typography color={'#fff'}>If you are looking for a creative and <br/> easy way to build a website. Vlashex is <br/> the perfect solution.</Typography>
            <Button>
              <Grid container>
                <Box padding={'10px 30px'} borderRadius={'128px'} bgcolor={'#E7C2D4'}><Typography fontSize={12} variant='subtitle2' >Book Consultation</Typography></Box>
                <Box sx={{
                    width:  '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#E7C2D4',
                    ml: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                  <ArrowForwardIcon sx={{
                    width:  '16px',
                    height: '16px',
                  }}
                  />
                </Box>
              </Grid>
            </Button>
          </Grid>
          <img style={{
            position: 'absolute',
            top: '99px',
            left: '394px',
            width: '350px'
          }} src={Man}/>
      </Box>
      <Grid container justifyContent={'space-between'}>
        {
          cardData.map((value)=>{ 
            return(
              <Card sx={{
                background: value.color,
                width: '24%',
                padding: '30px 15px',
                borderRadius: '25px',
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  <Typography variant='h5'>{value.text1}</Typography>
                  <Typography variant='subtitle2' fontSize={'10px'}>{value.text2}</Typography>
                </Box>

                <Box sx={{
                  display: 'flex',
                  alignItems: 'end',
                  justifyContent: 'space-between'
                }}>
                  <Box sx={{
                    width:  '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#000',
                    ml: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <ArrowForwardIcon sx={{
                    color: '#fff',
                    width:  '16px',
                    height: '16px',
                  }}
                  />
                </Box>
                  <img style={{width: '70%'}} src={value.imgUrl}/>
                </Box>
              </Card>
          )})
        }
      </Grid>
    </Container>

    </>
  );
} 

export default App;
