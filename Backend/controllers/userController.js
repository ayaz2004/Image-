import { db } from "../firebase/firebase.js";

export const signupUser = async (req, res) => {
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

  try {
    const userRef = db.collection("users").doc(email);
    const userDoc = await userRef.get();

    if (userDoc.exists) {
      return res.status(400).json({ error: "User already exists" });
    }

    await userRef.set({
      username,
      email,
      phone,
      currentClass,
      targetExam,
      targetYear,
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
