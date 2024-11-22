import React from "react";
import ResourceList from "../components/resources/ResourceList";
import ResourceSearch from "../components/resources/ResourceSearch";

const Resources: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Searching for: ", query);
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white">
        Explore Resources
      </h1>
      <ResourceSearch onSearch={handleSearch} />
      <ResourceList />
    </div>
  );
};

export default Resources;
