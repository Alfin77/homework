const http = require("http");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const nodemailer = require("nodemailer");

const server = http.createServer((req, res) => {
  
  if (req.url === "/upload" && req.method === "POST") {
    
    const form = formidable({
      uploadDir: path.join(__dirname, "uploads"),
      keepExtensions: true,
      multiples: false
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.end("Error uploading file");
        return;
      }

      const file = files.userfile?.[0];
      if (!file) {
        res.end("No file uploaded");
        return;
      }

      const oldPath = file.filepath;
      const newPath = path.join(__dirname, "uploads", file.originalFilename);

      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          console.error(err);
          res.end("Error saving file");
          return;
        }

        const transporter = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "6da238b1a0a314",
            pass: "5ea64c0d30db6d"
          }
        });

        const mailOptions = {
          from: "noreply@support.com",
          to: "admin@example.com",
          subject: "File Uploaded",
          text: "A user uploaded a file to the support portal."
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.error(error);
            res.end("File uploaded, but email failed.");
          } else {
            res.end("File uploaded successfully and admin notified!");
          }
        });

      });
    });

    return;
  }

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <h2>Tech Support – Upload a File</h2>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <label>Select file:</label>
      <input type="file" name="userfile" required>
      <br><br>
      <button type="submit">Upload</button>
    </form>
  `);
  res.end();

});

server.listen(8080, () => {
  console.log("Tech Support Server running on port 8080");
});