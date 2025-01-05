import axios from "axios";
const https = require("https");
import { FantasyFootballUrl } from ".";

export async function getMarkets(): Promise<string[]> {
  const route = "/getMarkets";
  const url = FantasyFootballUrl + route;

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  try {
    const resp = await axios.get(url, { httpsAgent: agent });
    return resp.data;
  } catch (err) {
    console.error("Error getting markets: ", err.message);
    throw err;
  }
}