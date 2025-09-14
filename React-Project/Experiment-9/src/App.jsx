import Student from "./component/Student";
import Teacher from "./component/Teacher";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Person Component Hierarchy Example</h2>

      <h3>Student:</h3>
      <Student name="Alice" age={20} course="Computer Science" />

      <h3>Teacher:</h3>
      <Teacher name="Mr. Smith" age={40} subject="Mathematics" />
    </div>
  );
}