import React from "react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import "./MyBio.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditIcon from "@mui/icons-material/Edit";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useNavigate, useLocation } from "react-router-dom";

function MyBio() {
  const navigate = useNavigate();
  const location = useLocation();

  function navigateToEdit() {
    navigate("/mybioedit");
  }

  return (
    <>
      <Grid container className="bioContainer">
        <Grid item xs={12} md={6} sm={6} lg={4}>
          <Grid container className="contentContainer">
            {/* Back Icon and Title */}
            <Grid item xs={12}>
              <Grid container columnGap={1}>
                <Grid item>
                  <ArrowBackIosIcon />
                </Grid>
                <Grid item>
                  <Typography>My Bio</Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* Input Fields */}
            <Grid item xs={12} className="inputContainer">
              {/* About Me */}
              <Grid container className="aboutContainer" rowGap={1}>
                <Grid item xs={10}>
                  <Typography>About me</Typography>
                </Grid>
                <Grid item xs={2}>
                  <Grid
                    container
                    style={{ direction: "row", justifyContent: "flex-end" }}
                  >
                    <EditIcon
                      fontSize="small"
                      onClick={() => navigateToEdit()}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  {location?.state?.aboutMe ? (
                    <Typography fontSize={13} color={"#858585"}>{location.state.aboutMe}</Typography>
                  ) : (
                    <Card className="card">
                      <CardContent>
                        <Typography
                          textAlign={"center"}
                          style={{ fontSize: "12px", color: "#a6a5a4" }}
                        >
                          No about me added yet
                        </Typography>
                      </CardContent>
                    </Card>
                  )}
                </Grid>
              </Grid>
              {/* Divider */}
              <Grid container>
                <Grid item xs={12} style={{ marginTop: "5px" }}>
                  <Box className="divider"></Box>
                </Grid>
              </Grid>
              {/* Blood Group */}
              <Grid container className="aboutContainer" rowGap={1}>
                <Grid item xs={8}>
                  <Typography>Blood group</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Grid
                    container
                    style={{ direction: "row", justifyContent: "flex-end" }}
                  >
                    <Typography style={{ fontSize: "13px", color: "#858585" }}>
                      {location?.state?.blood ? location.state.blood : "Select"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              {/* Resume */}
              <Grid container className="aboutContainer" rowGap={1}>
                <Grid item xs={12}>
                  <Card className="card">
                    <CardContent style={{ padding: 15 }}>
                      <Grid container>
                        <Grid item xs={2}>
                          <PageviewIcon color="primary" />
                        </Grid>
                        <Grid item xs={8}>
                          <Typography>Resume</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Grid
                            container
                            style={{
                              direction: "row",
                              justifyContent: "flex-end",
                            }}
                          >
                            <ArrowForwardIosIcon
                              fontSize="small"
                              onClick={() => navigate("/mybioedit")}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
              {/* Divider */}
              <Grid container>
                <Grid item xs={12} style={{ marginTop: "5px" }}>
                  <Box className="divider"></Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default MyBio;
