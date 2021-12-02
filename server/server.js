import app from "./app.js";
const port = process.env.PORT || 8080;

app.listen(port, (req, res) => {
  console.log(`listening on port ${port}`);
});
