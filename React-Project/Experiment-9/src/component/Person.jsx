// Base Person component
export default function Person({ name, age }) {
  return (
    <div>
      <strong>Name:</strong> {name}, <strong>Age:</strong> {age}
    </div>
  );
}