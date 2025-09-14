import Person from "./Person";

export default function Student({ name, age, course }) {
  return (
    <div>
      {/* Reuse Person for common info */}
      <Person name={name} age={age} />
      <div>
        <strong>Course:</strong> {course}
      </div>
    </div>
  );
}