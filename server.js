import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const sql = neon(process.env.DATABASE_URL);

app.use(cors({ origin: "https://software-design-gold.vercel.app" }));
app.use(express.json());

// ── Bootstrap: create users table if it doesn't exist ──────────────────────
await sql`
    CREATE TABLE IF NOT EXISTS users (
        id        SERIAL PRIMARY KEY,
        username  TEXT UNIQUE NOT NULL,
        password  TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
    )
`;

// ── REGISTER ────────────────────────────────────────────────────────────────
app.post("/api/register", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res.status(400).json({ error: "Username and password are required." });

    if (password.length < 6)
        return res.status(400).json({ error: "Password must be at least 6 characters." });

    try {
        const hashed = await bcrypt.hash(password, 12);
        await sql`
            INSERT INTO users (username, password)
            VALUES (${username}, ${hashed})
        `;
        return res.status(201).json({ message: "Account created! You can now log in." });
    } catch (err) {
        if (err.code === "23505")
            return res.status(409).json({ error: "Username already taken." });
        console.error(err);
        return res.status(500).json({ error: "Server error. Please try again." });
    }
});

// ── LOGIN ───────────────────────────────────────────────────────────────────
app.post("/api/login", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res.status(400).json({ error: "Username and password are required." });

    try {
        const [user] = await sql`
            SELECT * FROM users WHERE username = ${username}
        `;

        if (!user)
            return res.status(401).json({ error: "Invalid username or password." });

        const match = await bcrypt.compare(password, user.password);
        if (!match)
            return res.status(401).json({ error: "Invalid username or password." });

        const token = jwt.sign(
            { id: user.id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        return res.json({ message: "Login successful!", token });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Server error. Please try again." });
    }
});

// ── Start ───────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));