import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  return (
    <section>
      <div>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="/general">
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn0.iconfinder.com/data/icons/doctors-specialist/60/stethoscope__checkup__doctor__medical__healthcare-256.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography align="center" component="div">
                      General
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Link to="/diabetology">
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn1.iconfinder.com/data/icons/medical-specialist-1-3-1/1024/medical_specialist-20-256.png"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography align="center" component="div">
                      Diabetology
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Link to="/pediatrics">
              <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="https://previews.123rf.com/images/irinanaz/irinanaz2001/irinanaz200100134/139499201-newborn-on-hand-pediatric-clinic-logo-in-a-flat-style-colored-vector-illustration-white-isolated-bac.jpg"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography align="center" component="div">
                      Pediatrics
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn1.iconfinder.com/data/icons/medical-specialist-1-3-1/1024/medical_specialist-10-256.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography align="center" component="div">
                    Psychiatry
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn1.iconfinder.com/data/icons/medical-specialist-1-3-1/1024/medical_specialist-09-256.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography align="center" component="div">
                    Gastroenterology
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUOIIEuepnUpNLA6ZI14X7l1Lo2I9o_R2NygdGuQAwV7fQ-A2Jfowrbf-TGL-UNGp4u4&usqp=CAU"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography align="center" component="div">
                    Dermatology
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn1.iconfinder.com/data/icons/medical-specialist-1-3-1/1024/medical_specialist-04-256.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography align="center" component="div">
                    Ophthalmology
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 300 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn1.iconfinder.com/data/icons/medical-specialist-1-3-1/1024/medical_specialist-02-256.png"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography align="center" component="div">
                    Orthopedics
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
