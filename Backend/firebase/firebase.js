import admin from "firebase-admin";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountPath = path.resolve(
  __dirname,
  "../../serviceAccountKey.json"
);

try {
  const serviceAccount = await import(pathToFileURL(serviceAccountPath), {
    assert: { type: "json" },
  });

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount.default),
    databaseURL: "https://imageclasses-960b1-default-rtdb.firebaseio.com/", // Add your Realtime Database URL here
  });

  console.log("Firebase Admin initialized successfully.");
} catch (error) {
  console.error("Error initializing Firebase Admin:", error);
  process.exit(1);
}

// Firestore setup
const db = admin.firestore();
const auth = admin.auth();

// Realtime Database setup
const rdb = admin.database();

export { db, auth, rdb };
