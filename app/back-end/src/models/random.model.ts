import fetch from "node-fetch";
import { ApiUrlType } from "../types";

export async function getRandom(endpoint: ApiUrlType) {
  try {
    const response = await fetch(`https://www.the${endpoint}db.com/api/json/v1/1/random.php`);
    const obj = await response.json();
    return obj;
  } catch (error) {
    console.log(error);
    return 'fetch error';
  }
}