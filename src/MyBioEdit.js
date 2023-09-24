import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import "./MyBioEdit.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import { useNavigate, useLocation } from "react-router-dom";
import Resume from "./assets/resume.svg";
import "./DeleteDialog.css";

function MyBioEdit() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location", location)
  const [about, setAbout] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [dialogOpen, setDialogOpen] = React.useState(false);

  function navigateBack() {
    navigate(-1);
  }

  function handleChange(event) {
    setBloodGroup(event.target.value);
  }

  function saveDisable() {
    if (about.length > 0 && bloodGroup) {
      return false;
    }
    return true;
  }

  function deleteDialogClose() {
    setDialogOpen(false);
  }

  function saveOperation() {
    navigate("/MyBio", {
      state: {
        aboutMe: about,
        blood: bloodGroup
      },
    });
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
                  <ArrowBackIosIcon onClick={navigateBack} />
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
                  <Typography>Write something about yourself</Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="filled-multiline-static"
                    label="Write something here.."
                    multiline
                    rows={4}
                    defaultValue={""}
                    variant="filled"
                    fullWidth
                    onChange={(e) => setAbout(e.target.value)}
                    inputProps={{ maxLength: 500 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    style={{ direction: "row", justifyContent: "flex-end" }}
                  >
                    <Typography fontSize={"small"}>
                      {about.length}/500
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container className="aboutContainer" rowGap={1}>
                <Card>
                  <CardContent style={{ padding: 0 }}>
                    <Grid item xs={12}>
                      <img
                        src={Resume}
                        alt="resume"
                        style={{ width: "100%" }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container padding={1}>
                        <Grid item xs={2}>
                          <PictureAsPdfIcon fontSize="small" />
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
                            <DeleteIcon
                              fontSize="small"
                              color="error"
                              onClick={() => setDialogOpen(true)}
                            />
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              {/* Blood Group Field */}
              <Grid container className="aboutContainer" rowGap={1}>
                <Grid item xs={12}>
                  <Typography>Blood Group</Typography>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <Select
                      value={bloodGroup}
                      onChange={handleChange}
                      displayEmpty
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      <MenuItem value={"A positive (A+)"}>
                        A positive (A+)
                      </MenuItem>
                      <MenuItem value={"B positive (B+)"}>
                        B positive (B+)
                      </MenuItem>
                      <MenuItem value={"O positive (O+)"}>
                        O positive (O+)
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              {/* Save Button */}
              <Grid
                container
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "flex-end",
                  height: "30%",
                }}
              >
                <Grid item xs={12}>
                  <Button
                    style={{
                      backgroundColor: saveDisable() ? "#fcd3ca" : "#ff2f00",
                      width: "100%",
                      borderRadius: "25px",
                    }}
                    onClick={saveOperation}
                  >
                    <Typography
                      style={{ color: "white", textTransform: "none" }}
                    >
                      Save
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <DeleteDialog dialogOpen={dialogOpen} dialogClose={deleteDialogClose} />
    </>
  );
}

function DeleteDialog(props) {
  return (
    <div>
      <Modal
        open={props.dialogOpen}
        onClose={props.dialogClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={"deleteDialog"}>
          <Grid
            container
            rowGap={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={12}>
              <Typography textAlign={"center"} fontWeight={"bold"}>
                Resume Delete Pop Up
              </Typography>
            </Grid>
            <DeleteIcon color="error" fontSize="large" />
            <Grid item xs={12}>
              <Typography textAlign={"center"} fontSize={14}>
                Are you sure you want to delete your resume?
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid
                container
                columnGap={1}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Grid item xs={5}>
                  <Button
                    style={{
                      backgroundColor: "white",
                      borderRadius: "25px",
                      padding: 10,
                      width: "100%",
                    }}
                    onClick={props.dialogClose}
                  >
                    <Typography
                      style={{
                        color: "black",
                        textTransform: "none",
                        fontSize: "14px",
                      }}
                    >
                      Cancel
                    </Typography>
                  </Button>
                </Grid>
                <Grid item xs={5}>
                  <Button
                    style={{
                      backgroundColor: "#ff2f00",
                      borderRadius: "25px",
                      padding: 10,
                      width: "100%",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                        textTransform: "none",
                        fontSize: "14px",
                      }}
                    >
                      Delete
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default MyBioEdit;
