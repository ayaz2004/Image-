import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap } from "react-icons/fa";
import { Button, Select, TextInput, Label } from "flowbite-react";

export default function SignUpForm() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        {/* Sign Up Title */}
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign Up
        </h2>

        {/* Form */}
        <form className="space-y-6">
          {/* Group for Username, Email, and Phone */}
          <div className="space-y-4">
            {/* Username */}
            <div>
              <Label
                htmlFor="username"
                value="Username *"
                className="text-gray-700"
              />
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <TextInput
                  id="username"
                  placeholder="Enter your username"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <Label
                htmlFor="email"
                value="Email *"
                className="text-gray-700"
              />
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <TextInput
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="pl-10"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <Label
                htmlFor="phone"
                value="Phone(+91) *"
                className="text-gray-700"
              />
              <div className="relative flex">
                <span className="flex items-center justify-center px-3 border rounded-l-md bg-gray-200 text-gray-700">
                  🇮🇳 +91
                </span>
                <TextInput
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                  className="rounded-l-none"
                />
              </div>
            </div>
          </div>

          {/* Currently Studying */}
          <div>
            <Label
              htmlFor="class"
              value="Currently studying in *"
              className="text-gray-700"
            />
            <div className="relative">
              <FaGraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Select id="class" required className="pl-10">
                <option value="class 6">class 6</option>
                <option value="class 7">class 7</option>
                <option value="class 8">class 8</option>
                <option value="class 9">class 9</option>
                <option value="class 10">class 10</option>
                <option value="class 11">class 11</option>
                <option value="class 12">class 12</option>
              </Select>
            </div>
          </div>

          {/* Target Exam & Target Year */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label
                htmlFor="exam"
                value="Target Exam *"
                className="text-gray-700"
              />
              <Select id="exam" required>
                <option value="XIth Entrance">XIth Entrance</option>
                <option value="NEET">NEET</option>
                <option value="JEE">JEE</option>
              </Select>
            </div>
            <div>
              <Label
                htmlFor="year"
                value="Target Year *"
                className="text-gray-700"
              />
              <Select id="year" required>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
                <option value="2030">2030</option>
              </Select>
            </div>
          </div>

          {/* Sign Up Button */}
          <Button
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2.5"
            type="submit"
          >
            Sign Up
          </Button>
        </form>

        {/* Already have account */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <a
            href="/SignIn"
            className="text-red-500 hover:underline font-medium"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
