```js
const axios = require("axios");

const sendWhatsAppMessage = async (msg) => {
  await axios.post("https://api.chat-api.com/instanceXXXX/sendMessage?token=YOUR_TOKEN", {
    phone: "94766359869",
    body: msg
  });
};

const getBTCUpdate = async () => {
  try {
    const res = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
    const price = res.data.bitcoin.usd;
    const msg = `📢 *BTC Update*\n\nCurrent Price: 
    
{price}\n\n🕓 Auto update every 4 hours.\n🤖 POWER-BUY PASIYA-MD`;
    await sendWhatsAppMessage(msg);
  } catch (err) {
    console.error("Error fetching or sending message:", err.message);
  }
};

getBTCUpdate(); // run once when script starts
setInterval(getBTCUpdate, 14400000); // run every 4 hours (4 * 60 * 60 * 1000)
```

---
