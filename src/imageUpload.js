import React from "react";
import { useState,useContext } from "react";
import { useStateValue } from "./StateProvider";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import DeleteIcon from '@material-ui/icons/Delete';
import "./imageUpload.css"

import {
  Button,
  LinearProgress,
  TextField,
} from "@material-ui/core";
import { Delete, AddBoxRounded } from "@material-ui/icons";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { storage, db } from "./firebase";
import firebase from "firebase";

function ImageUpload({ username }) {

  const [{ user }, dispatch] = useStateValue();
  const [openUpload, setOpenUpload] = useState(false);
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const[input, setInput] = useState('');
  const[imageUrl, setImageUrl] = useState('')

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changes",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {
        console.log(error);
        alert(error.message);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").add({
            message: input || caption,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            image: imageUrl || url,
            username: user.displayName,
            });
            setProgress(0);
            setCaption("");
            setImage(null);
            setOpenUpload(false);
          });
      }
    );
  };

  return (
    <div>
      <PhotoLibraryIcon className="icon" style={{ color: "green" }} onClick={() => setOpenUpload(true)}>
        <h3>Photo/Video</h3>
        <AddBoxRounded fontSize="large"/>
      </PhotoLibraryIcon>

      <Dialog
        open={openUpload}
        onClose={() => setOpenUpload(false)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add Image
          </DialogContentText>
          <LinearProgress variant="determinate" value={progress} />
          {image ? (
            <div
              style={{
                display: "flex",
                flexFlow: "row",
                widows: "100%",
                justifyContent: "center",
              }}
            >
              <img
                src={URL.createObjectURL(image)}
                alt="Post Preview"
                style={{
                  objectFit: "contain",
                  width: "200px",
                  height: "200px",
                  margin: "20px 0",
                }}
              />
              <DeleteIcon onClick={() => setImage(null)}>
                <Delete />
              </DeleteIcon>
            </div>
          ) : (
            <input
              accept="image/*"
              type="file"
              style={{ width: "100%", margin: "20px 0" }}
              onChange={handleChange}
            />
          )}

          <TextField
            style={{ margin: "10px 0" }}
            value={caption}
            type="text"
            multiline
            rowsMax={4}
            fullWidth
            id="outlined-basic"
            label="Caption"
            variant="outlined"
            onChange={(e) => setCaption(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setOpenUpload(false);
              setProgress(0);
              setCaption("");
              setImage(null);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button onClick={handleUpload} color="primary">
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

//AIzaSyCSfu-KJC1IqOZ0nfC6PsjZInjhlTRjEow google api

export default ImageUpload;