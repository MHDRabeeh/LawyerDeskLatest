
import newsIcon from "../assets/Newspaper.png";
import scale from "../assets/Scales.png";
import book from "../assets/Book.png";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const RightSideHome = () => {
  const navigate = useNavigate();
  <Box
  component="span"
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
  •
</Box>


  return (
    <div className="flex flex-col items-center justify-center md:px-5 md:gap-4 px-2 mt-1">
    <div
  className="bg-[#0099ff] rounded-[3rem] flex flex-col items-center w-[10rem] h-[5rem] cursor-pointer"
  style={{ fontFamily: "Urbanist", marginLeft: "30px", marginTop: "10px" }}
  onClick={() => navigate("/lawsRules")}
>

    <Card sx={{ minWidth: 160, backgroundColor: "#0099ff" }}>
      <CardContent>
        <Typography gutterBottom style={{ marginLeft: "50px" }}>
          <img src={scale} alt="" style={{ width: "30px", height: "20px",color:'white' }} />
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography style={{ fontFamily: "Urbanist", fontWeight: "590",fontSize:"13px",color:'white',textAlign:"center" }}>
          Refer Laws & Rules
        </Typography>
      </CardContent>
    </Card>
  </div>
  <div
  className="bg-[#0099ff] rounded-[3rem] flex flex-col items-center w-[10rem] h-[5rem] cursor-pointer"
  style={{ fontFamily: "Urbanist", marginLeft: "30px", marginTop: "40px" }}
  onClick={() => navigate("/dictionary")}
>

    <Card sx={{ minWidth: 160, backgroundColor: "#0099ff" }}>
      <CardContent>
        <Typography gutterBottom style={{ marginLeft: "50px" }}>
          <img src={book} alt="" style={{ width: "30px", height: "20px" }} />
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography style={{ fontFamily: "Urbanist", fontWeight: "590",fontSize:"13px",marginLeft:"10px",color:'white',textAlign:"center" }}>
          Read Dictionary
        </Typography>
      </CardContent>
    </Card>
  </div>
  <div
  className="bg-[#0099ff] rounded-[3rem] flex flex-col items-center w-[10rem] h-[5rem] cursor-pointer"
  style={{ fontFamily: "Urbanist", marginLeft: "30px", marginTop: "40px" }}
  onClick={() => navigate("/Dictionary")}
>

    <Card sx={{ minWidth: 160, backgroundColor: "#0099ff" }}>
      <CardContent>
        <Typography gutterBottom style={{ marginLeft: "50px" }}>
          <img src={scale} alt="" style={{ width: "30px", height: "20px" }} />
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography style={{ fontFamily: "Urbanist", fontWeight: "590",fontSize:"13px",color:'white',textAlign:"center" }}>
          GenerateTemplates
        </Typography>
      </CardContent>
    </Card>
  </div>
</div>
  );
};

export default RightSideHome;
