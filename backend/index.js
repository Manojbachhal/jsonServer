const jsonServer = require("json-server");
const cors = require("cors");
const path = require("path");

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

const corsOptions = {
  origin: "http://localhost:3000", // Allow requests from this specific origin
  optionsSuccessStatus: 200, // Return 200 for preflight requests
};

server.use(cors(corsOptions));
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use(router);

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`);
});
