import * as React from 'react';
import Paper from '@mui/material/Paper';

export default function PlayerCard() {
    return (
        <Paper elevation={0} sx={{borderRadius: "20px", width: "850px", height: "400px"}}>
            <header style={{ 
                height: "115px",
                backgroundColor: "#bd0510",
                display: "flex",
                flexDirection: "column",
                paddingTop: "32px", paddingLeft: "32px", paddingRight: "32px",
                borderTopLeftRadius: "20px", borderTopRightRadius: "20px" }}>

                {/* Player Icons */}
                <div className="playerIcon" 
                    style={{
                        display: "flex",
                        position: "relative"
                    }}
                >
                    <img src='img\players\gabriel_martinelli.png' alt="gabriel_martinelli" style={{width: "80px", height: "80px"}}></img>
                </div>
                {/* Player name and team */}
                <div className="nameAndTeam"
                    style={{
                        display: "flex",
                        position: "relative",
                        width: "675px",
                        height: "70px",
                    }}
                >
                    <h1>Gabriel Martinelli</h1>
                    <a href="#">
                        <div>
                            <img src="img\teams\arsnal_fc.png" style={{width: "50px", height: "50px"}}></img>
                        </div>
                        Arsnal
                    </a>
                </div>
            </header>
        </Paper>
    );
}