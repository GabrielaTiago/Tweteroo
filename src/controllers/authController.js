import { createUser } from "../services/authService.js";

function singUp(req, res) {
  const { username, avatar } = req.body;

  createUser(username, avatar);

  res.status(201).send("OK");
}

export { singUp };
