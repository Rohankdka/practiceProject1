import db from "../db.js";

export const create = (req, res) => {
  const { title, description } = req.body;
  const user_id = req.user.id;

  const sql = "INSERT INTO blog(`user_id`, `title`, `description`) VALUES (?, ?, ?)";

  db.query(sql, [user_id, title, description], (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ message: "Value Created....", result });
  });
};

export const read = (req, res) => {
  const sql = "SELECT * FROM blog";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).send(err);
    return res.status(200).send({ message: "Value read....", result });
  });
};

export const update = (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const userid = req.user.id;

  const sql = "UPDATE blog SET title = ?, description = ? WHERE id = ? AND user_id = ?";

  db.query(sql, [title, description, id, userid], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Blog post not found or User not authorized." });
    }
    return res.status(200).json({ message: "Successfully Updated..", result });
  });
};

export const dele = (req, res) => {
  const { id } = req.params;
  const userid = req.user.id;

  const sql = "DELETE FROM blog WHERE id = ? AND user_id = ?";

  db.query(sql, [id, userid], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    if (result.affectedRows === 0) {
      return res.status(400).json({ message: "Blog post not available or user not authorized." });
    }
    return res.status(200).json({ message: "Value Deleted....", result });
  });
};

export const authread = (req, res) => {
  const userid = req.user.id;

  const sql = "SELECT * FROM blog WHERE user_id = ?";

  db.query(sql, [userid], (err, result) => {
    if (err) return res.status(500).send(err);
    if (result.length === 0) return res.status(404).send({ message: "No records found for this user" });
    return res.status(200).send({ message: "Value read", result });
  });
};
