import React from "react";

interface ResourceCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  rating: number;
  downloads: number;
  onDownload: (id: string) => void;
  onBookmark: (id: string) => void;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  id,
  title,
  description,
  category,
  author,
  rating,
  downloads,
  onDownload,
  onBookmark,
}) => {
  return (
    <div className="bg-card text-card-foreground shadow rounded-lg p-6 mb-6">
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
          {category}
        </span>
        <p className="text-muted-foreground">By {author}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-muted"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-muted-foreground text-sm">
            {rating.toFixed(1)}
          </span>
        </div>
        <p className="text-muted-foreground">{downloads} downloads</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => onDownload(id)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/90 transition duration-300"
        >
          Download
        </button>
        <button
          onClick={() => onBookmark(id)}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded hover:bg-secondary/90 transition duration-300"
        >
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
