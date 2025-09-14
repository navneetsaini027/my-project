import { useState } from "react";

export default function LibraryManagement() {
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const handleAddBook = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  const handleRemoveBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="library-container">
      <h2>Library Management</h2>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Add Book */}
      <div className="add-section">
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
        />
        <button onClick={handleAddBook}>Add Book</button>
      </div>

      {/* Book List */}
      <div className="book-list">
        {filteredBooks.map((book, index) => (
          <div key={index} className="book-item">
            <span>
              <strong>{book.title}</strong> by {book.author}
            </span>
            <button onClick={() => handleRemoveBook(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}