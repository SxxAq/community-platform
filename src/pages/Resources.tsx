import React from "react";
import ResourceList from "../components/resources/ResourceList";
import ResourceSearch from "../components/resources/ResourceSearch";

const Resources: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for:", query);
    // Implement search functionality
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-100">
        Learning Resources
      </h1>
      <div className="mb-8">
        <ResourceSearch onSearch={handleSearch} />
      </div>
      <div className="bg-card text-card-foreground shadow-lg rounded-lg p-6">
        <ResourceList />
      </div>
    </div>
  );
};

export default Resources;
