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
      <div className="relative w-full">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Search resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-muted-foreground" />
        </div>
      </div>
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        Search
      </button>
    </form>
  );
};

export default ResourceSearch;
