import React, { useState } from "react";
import ResourceCard from "./ResourceCard.tsx";
// Define the structure of a resource
interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  rating: number;
  downloads: number;
}

// Dummy data for resources
const dummyResources: Resource[] = [
  {
    id: "1",
    title: "Learn React",
    description: "A comprehensive guide to learning React.",
    category: "React",
    author: "John Doe",
    rating: 4.5,
    downloads: 1200,
  },
  {
    id: "2",
    title: "Master JavaScript",
    description: "In-depth JavaScript tutorials for all levels.",
    category: "JavaScript",
    author: "Jane Smith",
    rating: 4.7,
    downloads: 980,
  },
  {
    id: "3",
    title: "Python for Data Science",
    description: "Python programming for data analysis and machine learning.",
    category: "Python",
    author: "Mark Lee",
    rating: 4.8,
    downloads: 1450,
  },
];

// ResourceList component that uses the dummy data and applies filtering logic
const ResourceList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // Filter resources based on search term and category
  const filteredResources = dummyResources.filter((resource: Resource) => {
    return (
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === "" || resource.category === selectedCategory)
    );
  });

  return (
    <div className="container mx-auto p-4">
      {/* Search and Category Filter */}
      <div className="flex justify-end mb-4">
        {/* <div className="w-full max-w-xs">
          <input
            type="text"
            placeholder="Search resources"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 border rounded-lg"
          />
        </div>*/}
        <div className="w-full max-w-xs ml-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full p-2 border rounded-lg text-gray-800"
          >
            <option value="">All Categories</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>
      </div>

      {/* Display filtered resources */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
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
      ) : (
        <div className="text-center text-lg text-gray-500">
          No resources found
        </div>
      )}
    </div>
  );
};

export default ResourceList;
