import { useState, useEffect } from "react";

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  author: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

export const useResource = () => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        // Replace this with your actual API call
        const response = await fetch("/api/resources");
        if (!response.ok) {
          throw new Error("Failed to fetch resources");
        }
        const data = await response.json();
        setResources(data);
      } catch (err) {
        setError("An error occurred while fetching resources");
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  const addResource = async (
    newResource: Omit<Resource, "id" | "createdAt" | "updatedAt">,
  ) => {
    try {
      setLoading(true);
      // Replace this with your actual API call
      const response = await fetch("/api/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResource),
      });
      if (!response.ok) {
        throw new Error("Failed to add resource");
      }
      const addedResource = await response.json();
      setResources([...resources, addedResource]);
    } catch (err) {
      setError("An error occurred while adding the resource");
    } finally {
      setLoading(false);
    }
  };

  const updateResource = async (
    id: string,
    updatedResource: Partial<Resource>,
  ) => {
    try {
      setLoading(true);
      // Replace this with your actual API call
      const response = await fetch(`/api/resources/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedResource),
      });
      if (!response.ok) {
        throw new Error("Failed to update resource");
      }
      const updatedResourceData = await response.json();
      setResources(
        resources.map((resource) =>
          resource.id === id ? updatedResourceData : resource,
        ),
      );
    } catch (err) {
      setError("An error occurred while updating the resource");
    } finally {
      setLoading(false);
    }
  };

  const deleteResource = async (id: string) => {
    try {
      setLoading(true);
      // Replace this with your actual API call
      const response = await fetch(`/api/resources/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete resource");
      }
      setResources(resources.filter((resource) => resource.id !== id));
    } catch (err) {
      setError("An error occurred while deleting the resource");
    } finally {
      setLoading(false);
    }
  };

  return {
    resources,
    loading,
    error,
    addResource,
    updateResource,
    deleteResource,
  };
};
