import express from "express";

import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

const today = new Date("May 6, 2024 11:13:00");
const day = today.getDay();

console.log(day);

let type = "a weekday";
let adv = "it's time to work hard";

if(day === 0 || day === 6) {
    type = "a weekend";
    adv = "it's time to have fun";
  }

app.get("/", (req, res) => {
    res.render("index.ejs", {
            dayType : type,
            advice : adv ,   
    });
  });
app.listen(port,()=>{
    console.log(`Server is running on port ${port}.`)
})