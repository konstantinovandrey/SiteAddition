// components/BookGrid.tsx
import { getBooks } from "../tina/__generated__/client";

export default async function BookGrid() {
  const books = await getBooks();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      {books.map((book) => (
        <div key={book.id} className="group relative hover:scale-105 transition-transform">
          <img 
            src={book.cover} 
            alt={book.title} 
            className="rounded-lg shadow-xl h-64 w-full object-cover"
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.author?.join(", ")}</p>
            <div className="flex items-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} filled={i < book.rating} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Компонент звезды рейтинга
const Star = ({ filled }: { filled: boolean }) => (
  <svg className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);