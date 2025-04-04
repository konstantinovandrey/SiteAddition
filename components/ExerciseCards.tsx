// components/ExerciseCard.tsx
import { TinaMarkdown } from "tinacms/dist/rich-text";

export function ExerciseCard({ exercise }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform">
      <img 
        src={exercise.cover} 
        className="w-full h-48 object-cover rounded-lg mb-4"
        alt={exercise.title}
      />
      <h3 className="text-xl font-bold text-gray-800 mb-2">{exercise.title}</h3>
      <div className="flex gap-2 mb-3">
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          {exercise.category}
        </span>
      </div>
      <div className="prose">
        <TinaMarkdown content={exercise.description} />
      </div>
      <div className="mt-4 flex justify-between">
        <div className="text-orange-500">
          🔥 {exercise.stats?.calories} ккал/мин
        </div>
        <div className="text-purple-600">
          ⭐ {exercise.stats?.difficulty}/5
        </div>
      </div>
    </div>
  );
}