require("dotenv").config();
const express = require("express");
const Web3 = require("web3");
const cors = require("cors");
const abi = require("./contract/abi.json");

const app = express();
app.use(cors());
app.use(express.json());

// Setup Web3 connection
const web3 = new Web3(process.env.INFURA_URL);

// Get contract instance
const contract = new web3.eth.Contract(abi, process.env.CONTRACT_ADDRESS);

// Get signer from private key
const account = web3.eth.accounts.privateKeyToAccount(process.env.PRIVATE_KEY);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

// ✅ CREATE herb batch
app.post("/api/create", async (req, res) => {
  try {
    const { id, herbName, farmerName, farmLocation, harvestDate } = req.body;
    const tx = await contract.methods
      .createBatch(id, herbName, farmerName, farmLocation, harvestDate)
      .send({ from: account.address, gas: 300000 });

    res.json({ status: "success", txHash: tx.transactionHash });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

// ✅ UPDATE herb batch (lab + packaging)
app.post("/api/update", async (req, res) => {
  try {
    const { id, labReportUrl, packagingDetails } = req.body;
    const tx = await contract.methods
      .updateBatch(id, labReportUrl, packagingDetails)
      .send({ from: account.address, gas: 300000 });

    res.json({ status: "success", txHash: tx.transactionHash });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

// ✅ GET herb batch by ID
app.get("/api/get/:id", async (req, res) => {
  try {
    const batch = await contract.methods.getBatch(req.params.id).call();
    res.json({
      herbName: batch[0],
      farmerName: batch[1],
      farmLocation: batch[2],
      harvestDate: batch[3],
      labReportUrl: batch[4],
      packagingDetails: batch[5],
    });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`✅ API running at http://localhost:${PORT}`));
