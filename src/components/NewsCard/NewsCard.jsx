import React from "react";
import "./NewsCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import { Button, CardActions } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
    palette: {
      mode,
      primary: {
        ...(mode === 'dark' && {
          main: '#171717',
        }),
      },
      ...(mode === 'dark' && {
        background: {
          default: '#000000',
          paper: '#171717',
        }
      }),
    },
  });
  

export default function NewsCard({
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
    times,
    darkMode
}) {
    const darkModeTheme = createTheme(getDesignTokens('dark'));
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
        },
      });

    //* function for showing date in proper format
    const showDate = () => {
        let Days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let Months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
        let day = Days[new Date(times).getDay()];
        let month = Months[new Date(times).getMonth()];
        let date = new Date(times).getDate();
        return `${day} - ${date} ${month}`;
    };
    return (
        <ThemeProvider theme={darkModeTheme}>
        <Card className="newsCard">
            {/* <CardActionArea>   */}
            {/* Commenting this because this is a clickable section and 
            if inside this im adding any button its giving me "button 
            cannot appear as a descendant of button" error. This is because 
            parent(card content) is clickable and inside this the child(button) is also clickable  
            Search in google for more info. */}
            <CardMedia
                // sx={{margin: 1.2, borderRadius: '10px', maxWidth: '93%'}}
                component="img"
                height="140"
                image={imageUrl}
                alt="No image found"
            />
            <CardContent sx={{ paddingBottom: 1.2 }}>
                <div className="card-header">
                    <button className="card-chip-primary">{source}</button>
                    <button className="card-chip-secondary">{showDate()}</button>
                </div>

                <h5 className="title">{title}</h5>
                <Typography variant="body2" color="text.secondary" >
                    {description}
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardContent sx={{ paddingTop: 0 }}>
                <a
                    href={newsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="news-link"
                >
                    <button className="read-more-btn">
                        Read more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>

                    </button>
                </a>
            </CardContent>
        </Card>
        </ThemeProvider>
    );
}
