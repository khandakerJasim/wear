const app = require("./app");
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`the server is running port at ${PORT}`);
});
