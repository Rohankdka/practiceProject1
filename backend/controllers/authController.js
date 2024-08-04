import db from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, "secret_key", {
    expiresIn: "1h",
  });
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .send({ message: "username , email and password are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql =
      "insert into users(`username`,`email`,`password`) values (?,?,?)";

    db.query(sql, [username, email, hashedPassword], (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(400).send({ message: "Email already Registered" });
        }
        return res
          .status(500)
          .send({ message: "Database query error", error: err });
      }

      res.status(200).send({ message: "Registration Successfull", result });
    });
  } catch (err) {
    res.status(500).send({ message: "Error hashing password", error: err });
  }
};

export const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ message: "email and password are required." });
  }

  const sql = "select*from users where email=?";

  db.query(sql, [email], async (err, result) => {
    if (err)
      return res
        .status(500)
        .send({ message: "Database query error", error: err });

    if (result.length === 0) {
      return res.status(401).send({ message: "Invalid email or Password" });
    }

    const user = result[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(400).send({ message: "Invalid email or password" });
    }

    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 3600000,
    });
    res.status(200).send({ message: "Login Successful", user });
  });
};
