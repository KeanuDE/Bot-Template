const nekoclient = require('nekos.life');
const neko = new nekoclient();

const client = require('../util/client');
const embedCreator = require('../util/embedBuilder');
module.exports = {
  command: "owo",
  description: "owofy your text",
  args: [{"type":"string","name":"text","description":"the text you want to owofy","required":true}],
  callback: async (interaction) => {
    const owoTEXT = (await neko.sfw.OwOify({text: interaction.options.getString("text")})).owo;
    interaction.reply(owoTEXT);
  }
}