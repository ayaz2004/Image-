export const validateSignup = (req, res, next) => {
  const {
    username,
    email,
    password,
    phone,
    currentClass,
    targetExam,
    targetYear,
  } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !phone ||
    !currentClass ||
    !targetExam ||
    !targetYear
  ) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[6-9]\d{9}$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number format." });
  }

  if (isNaN(targetYear) || targetYear < new Date().getFullYear()) {
    return res.status(400).json({ error: "Invalid target year." });
  }

  next();
};
