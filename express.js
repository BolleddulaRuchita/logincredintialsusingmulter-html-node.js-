const express = require("express");
const multer = require("multer");
const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname); // Save files in the current directory
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Keep the original file name
    }
});

const upload = multer({ storage });

app.use(express.urlencoded({ extended: true }));

app.post("/", upload.single("image"), (req, res) => { // Change 'file' to 'image'
    console.log(req.file);
    console.log(req.body); // Log the form data
    res.send(req.body); // Respond with the form data
});

app.listen(3000, () => {
    console.log("Express server is running on http://localhost:3000");
});
