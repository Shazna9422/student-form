const StudentCard = ({ student }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex flex-col items-center bg-blue-600 p-6 text-white">
        {student.image ? (
          <img
            src={student.image}
            alt={student.name}
            className="h-24 w-24 rounded-full border-4 border-white object-cover"
          />
        ) : (
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-400 text-3xl font-bold">
            {student.name.charAt(0).toUpperCase()}
          </div>
        )}

        <h3 className="mt-3 text-xl font-bold">
          {student.name}
        </h3>

        <p className="text-sm text-blue-100">
          {student.studentId}
        </p>
      </div>

      <div className="space-y-3 p-5 text-sm text-gray-700">
        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Phone:</strong> {student.phone}
        </p>

        <p>
          <strong>Course:</strong> {student.course}
        </p>

        <p>
          <strong>Age:</strong> {student.age}
        </p>

        <p>
          <strong>Gender:</strong> {student.gender}
        </p>

       <p className="wrap-break-word">
  <strong>Address:</strong> {student.address}
    </p>
      </div>
    </div>
  );
};

export default StudentCard;