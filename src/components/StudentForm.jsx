import { useState } from "react";

const StudentForm = ({ onRegister }) => {
  const [form, setForm] = useState({
    image: "",
    name: "",
    studentId: "",
    email: "",
    phone: "",
    course: "",
    age: "",
    gender: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name.trim().length < 3) {
      setError("Name must contain at least 3 characters.");
      return;
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      setError("Enter a valid email address.");
      return;
    }

    if (
      form.password.length < 8 ||
      !/[A-Z]/.test(form.password) ||
      !/[0-9]/.test(form.password)
    ) {
      setError(
        "Password needs 8 characters, one uppercase letter and one number."
      );
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    onRegister({
      ...form,
      name: form.name.trim(),
    });

    setError("");

    setForm({
      image: "",
      name: "",
      studentId: "",
      email: "",
      phone: "",
      course: "",
      age: "",
      gender: "",
      address: "",
      password: "",
      confirmPassword: "",
    });
  };

  const inputStyle =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl space-y-5 rounded-2xl bg-white p-6 shadow-lg sm:p-8"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-blue-700">
          Student Registration
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          Fill in your student details
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-2 block font-medium">
            Student Image URL
          </label>
          <input
            className={inputStyle}
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/photo.jpg"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>
          <input
            className={inputStyle}
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter full name"
            minLength={3}
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Student ID
          </label>
          <input
            className={inputStyle}
            name="studentId"
            value={form.studentId}
            onChange={handleChange}
            placeholder="STU001"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Email
          </label>
          <input
            className={inputStyle}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="student@gmail.com"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Phone Number
          </label>
          <input
            className={inputStyle}
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone number"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Course
          </label>
          <select
            className={inputStyle}
            name="course"
            value={form.course}
            onChange={handleChange}
            required
          >
            <option value="">Select Course</option>
            <option value="IT">Information Technology</option>
            <option value="Software Engineering">
              Software Engineering
            </option>
            <option value="English">English</option>
            <option value="Business Management">
              Business Management
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Age
          </label>
          <input
            className={inputStyle}
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter age"
            min="1"
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Gender
          </label>
          <select
            className={inputStyle}
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block font-medium">
            Address
          </label>
          <textarea
            className={inputStyle}
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter your address"
            rows={3}
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Password
          </label>
          <input
            className={inputStyle}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
            minLength={8}
            required
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Confirm Password
          </label>
          <input
            className={inputStyle}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm password"
            required
          />
        </div>
      </div>

      {error && (
        <p className="rounded-lg bg-red-100 p-3 text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-[0.99]"
      >
        Register Student
      </button>
    </form>
  );
};

export default StudentForm;