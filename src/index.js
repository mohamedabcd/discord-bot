"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config(); // Recommended way of loading dotenv
const inversify_config_1 = require("./inversify.config");
const types_1 = require("./types");
let bot = inversify_config_1.default.get(types_1.TYPES.Bot);
bot.listen().then(() => {
    console.log('WE IN THE FUCKING BUILDING YEAAAAAAAH');
}).catch((error) => {
    console.log('OH... WELL, SHIT HAPPENS -_o_- ', error);
});
//# sourceMappingURL=index.js.map