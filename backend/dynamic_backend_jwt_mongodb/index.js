import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 4002;

app.use(bodyParser.json());

app.post("/sum", (req, res) => {
    try {
        const { num1, num2 } = req.body;
        if (typeof num1 === "number" && typeof num2 === "number") {
            const sum = num1 + num2;
            res.send({ sum });
        } else {
            res.status(400).json({ error: "Invalid input" });
        }
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
