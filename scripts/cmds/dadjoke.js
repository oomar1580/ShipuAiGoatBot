const axios = require("axios");
module.exports = {
  config: {
    name: "dadjoke",
    version: "1.0",
    author: "opu",
    countDown: 5,
    role: 0,
    shortDescription: { en: "Dad joke" },
    longDescription: { en: "Random dad joke" },
    category: "𝗙𝗨𝗡 & 𝗚𝗔𝗠𝗘",
    guide: { en: "+dadjoke" }
  },

  onStart: async function({ message }) {
    try {
      const res = await axios.get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" }
      });
      message.reply(`👨‍🦳 𝗗𝗮𝗱 𝗝𝗼𝗸𝗲:\n"${res.data.joke}"`);
    } catch {
      message.reply("❌ 𝗘𝗿𝗿𝗼𝗿 𝗴𝗲𝘁𝘁𝗶𝗻𝗴 𝗷𝗼𝗸𝗲.");
    }
  }
};
