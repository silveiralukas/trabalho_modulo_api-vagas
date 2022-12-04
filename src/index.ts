import { DataBaseConnection } from "./main/database/typeorm.connection";
import { runServer } from "./main/server/express.server";

DataBaseConnection.connect().then(() => {
  runServer();
});
