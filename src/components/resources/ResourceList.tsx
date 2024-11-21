import React, { useState, useEffect } from "react";
import { useResource } from "../../hooks/useResource";
import ResourceCard from "./ResourceCard";
import Input from "../common/Input";
import Button from "../common/Button";

interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
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

  if (isLoading) return <div className="text-foreground">Loading...</div>;
  if (error) return <div className="text-destructive">Error: {error}</div>;

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border rounded px-2 py-1 bg-background text-foreground"
        >
          <option value="">All Categories</option>
          {/* Add category options here */}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((resource: Resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
