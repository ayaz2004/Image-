import admin from "firebase-admin";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

dotenv.config();

// Resolve the current directory of this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Resolve the absolute path of the service account key
const serviceAccountPath = path.resolve(
  __dirname,
  "../../serviceAccountKey.json"
);

try {
  // Import the JSON file with an assertion
  const serviceAccount = await import(pathToFileURL(serviceAccountPath), {
    assert: { type: "json" },
  });

  // Initialize Firebase Admin SDK
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount.default),
  });

  console.log("Firebase Admin initialized successfully.");
} catch (error) {
  console.error("Error initializing Firebase Admin:", error);
  process.exit(1); // Exit the application if initialization fails
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
