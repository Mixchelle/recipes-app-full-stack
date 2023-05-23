import app from "./app";

<<<<<<< HEAD
const PORT = 3001;

app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));
=======
const port = process.env.API_PORT || 3001;

app.listen(port, () => console.log('App Running on', port));
>>>>>>> juliaViana-recipes
