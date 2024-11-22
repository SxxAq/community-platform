import React from "react";
import { Download, Bookmark, Star } from "lucide-react";

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
    <div className="bg-card text-card-foreground shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <h3 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex justify-between items-center mb-4">
        <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-0.5 rounded">
          {category}
        </span>
        <p className="text-muted-foreground text-sm">By {author}</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < Math.floor(rating)
                  ? "text-yellow-400 fill-current"
                  : "text-muted"
              }`}
            />
          ))}
          <span className="ml-2 text-muted-foreground text-sm">
            {rating.toFixed(1)}
          </span>
        </div>
        <p className="text-muted-foreground text-sm">{downloads} downloads</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={() => onDownload(id)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center"
        >
          <Download className="mr-2" size={20} />
          Download
        </button>
        <button
          onClick={() => onBookmark(id)}
          className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-secondary/90 transition-colors duration-300 flex items-center"
        >
          <Bookmark className="mr-2" size={20} />
          Bookmark
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
