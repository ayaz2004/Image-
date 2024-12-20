import { auth, db } from "../firebase/firebase.js";

export const signUpUser = async (req, res) => {
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

  try {
    const userDoc = await db.collection("users").doc(email).get();

    if (userDoc.exists) {
      return res.status(409).json({ error: "User already exists." });
    }

    const formattedPhone = `+91${phone}`;
    // Create user with Firebase Admin SDK
    const newUser = await auth.createUser({
      email,
      password,
      displayName: username,
      phoneNumber: formattedPhone,
    });

    // Save additional details in Firestore
    await db.collection("users").doc(email).set({
      username,
      email,
      phone: formattedPhone,
      currentClass,
      targetExam,
      targetYear,
    });

    res
      .status(201)
      .json({ message: "User registered successfully.", user: newUser });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal server error." });
  }
};
