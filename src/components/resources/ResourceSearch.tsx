import React, { useState } from "react";
import { Search } from "lucide-react";

interface ResourceSearchProps {
  onSearch: (query: string) => void;
}

const ResourceSearch: React.FC<ResourceSearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <div className="relative flex-grow">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-foreground dark:bg-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
          size={20}
        />
      </div>
      <button
        type="submit"
        className="ml-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default ResourceSearch;
