//arranca el sv
import { config } from "dotenv";
import app from "./app.js";
import connectToDB from "./database.js";

config();

async function main() {
  connectToDB();
  app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}
main();
