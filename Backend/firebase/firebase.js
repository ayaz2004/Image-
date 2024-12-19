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
  });

  console.log("Firebase Admin initialized successfully.");
} catch (error) {
  console.error("Error initializing Firebase Admin:", error);
  process.exit(1);
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
