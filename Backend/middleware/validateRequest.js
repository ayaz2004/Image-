export const validateSignup = (req, res, next) => {
  const { username, email, phone, currentClass, targetExam, targetYear } =
    req.body;

  if (
    !username ||
    !email ||
    !phone ||
    !currentClass ||
    !targetExam ||
    !targetYear
  ) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Validate phone number format (for India)
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number format" });
  }

  // Validate class and year
  if (isNaN(targetYear) || targetYear < new Date().getFullYear()) {
    return res.status(400).json({ error: "Invalid target year" });
  }

  next();
};
