import Person from "./Person";

export default function Teacher({ name, age, subject }) {
  return (
    <div>
      {/* Reuse Person for common info */}
      <Person name={name} age={age} />
      <div>
        <strong>Subject:</strong> {subject}
      </div>
    </div>
  );
}