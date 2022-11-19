import React from "react";
import "./NewsCard.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions } from "@mui/material";

export default function NewsCard({
    title,
    description,
    imageUrl,
    newsUrl,
    author,
    date,
    source,
    times,
}) {

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
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions sx={{ paddingTop: 0 }}>
                <a
                    href={newsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="news-link"
                >
                    <Button
                        size="small"
                        color="primary"
                        sx={{ paddingLeft: "8px" }}
                    >
                        Read more
                    </Button>
                </a>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 shareIcon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                </svg>
            </CardActions>
        </Card>
    );
}
