require('dotenv').config(); // Recommended way of loading dotenv
import container from "./inversify.config";
import {TYPES} from "./types";
import {Bot} from "./bot";
let bot = container.get<Bot>(TYPES.Bot);
bot.listen().then(() => {
  console.log('WE IN THE FUCKING BUILDING YEAAAAAAAH')
}).catch((error) => {
  console.log('OH... WELL, SHIT HAPPENS -_o_- ', error)
});