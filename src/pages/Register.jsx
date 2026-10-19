import { useState } from "react";
import StudentForm from "../components/StudentForm";
import StudentCard from "../components/StudentCard";

const Register = () => {
  const [students, setStudents] = useState([]);

  const handleRegister = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-800">
            Student Management
          </h1>

          <p className="mt-3 text-gray-500">
            Register students and manage their details
          </p>
        </header>

        <StudentForm onRegister={handleRegister} />

        <section className="mt-12">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-slate-800">
              Registered Students
            </h2>

            <span className="rounded-full bg-blue-100 px-4 py-2 font-semibold text-blue-700">
              Total: {students.length}
            </span>
          </div>

          {students.length === 0 ? (
            <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
              No students registered yet.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {students.map((student, index) => (
                <StudentCard
                  key={`${student.studentId}-${index}`}
                  student={student}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Register;