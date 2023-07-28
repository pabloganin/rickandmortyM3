const users = require("../utils/users");

function login(req, res) {
  const email = req.query.email;
  const password = req.query.password;

  if (!email || !password) {
    return res.status(400).json({ error: "Falta el correo electrónico o la contraseña" });
  }

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    return res.status(200).json({ access: true });
  } else {
    return res.status(403).json({ access: false });
  }
}

module.exports = login;
