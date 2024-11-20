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
      <h1 className="text-3xl font-bold mb-6">Learning Resources</h1>
      <div className="mb-6">
        <ResourceSearch onSearch={handleSearch} />
      </div>
      <ResourceList />
    </div>
  );
};

export default Resources;
