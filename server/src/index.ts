import { config } from "./config";
import { getServer } from "./server/http";

const server = getServer({}, config);