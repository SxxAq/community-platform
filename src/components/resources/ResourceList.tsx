import React, { useState } from "react";
import { useResource } from "../../hooks/useResource";
import ResourceCard from "./ResourceCard";
import { Search, Filter } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  author: string;
  rating: number;
  downloads: number;
}

const ResourceList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { resources, isLoading, error } = useResource();

  const filteredResources = resources.filter((resource: Resource) => {
    return (
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || resource.category === selectedCategory)
    );
  });

  if (isLoading)
    return (
      <div className="text-center text-lg text-foreground">Loading...</div>
    );
  if (error)
    return (
      <div className="text-center text-lg text-destructive">Error: {error}</div>
    );

  return (
    <div className="space-y-6">
      <div className="flex space-x-4">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={20}
          />
        </div>
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="appearance-none w-full pl-10 pr-8 py-2 rounded-lg border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">All Categories</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
            <option value="Machine Learning">Machine Learning</option>
          </select>
          <Filter
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            size={20}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource: Resource) => (
          <ResourceCard
            key={resource.id}
            {...resource}
            onDownload={() =>
              console.log(`Downloading resource ${resource.id}`)
            }
            onBookmark={() =>
              console.log(`Bookmarking resource ${resource.id}`)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
