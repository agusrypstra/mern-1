//arranca el sv
import dotenv from "dotenv";
import app from "./app.js";
import db from "./database.js";

dotenv.config();

async function main() {
  db.connectToDB();
  await app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}
main();
