import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Button, TextInput, Label } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../firebase.js"; // Import Firebase Client SDK

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Client-side sign-in using Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("User signed in:", user);

      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign In
        </h2>
        <form className="space-y-4" onSubmit={handleSignIn}>
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div>
            <Label htmlFor="email" value="Email *" className="text-gray-700" />
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <TextInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="pl-10"
              />
            </div>
          </div>
          <div>
            <Label
              htmlFor="password"
              value="Password *"
              className="text-gray-700"
            />
            <TextInput
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5"
            type="submit"
          >
            Sign In
          </Button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/SignUp"
            className="text-red-500 hover:underline font-medium"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
