import { useState, useEffect } from 'react';
import ResourceList from './components/ResourceList';
import ResourceForm from './components/ResourceForm';
import { getResources, createResource, deleteResource } from './api/api';

function App() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      const data = await getResources();
      setResources(data);
    };

    fetchResources();
  }, []);

  const handleCreateResource = async (resourceData) => {
    const newResource = await createResource(resourceData);
    setResources([...resources, newResource]);
  };

  const handleDeleteResource = async (id) => {
    await deleteResource(id);
    setResources(resources.filter(resource => resource._id !== id));
  };

  return (
    <div>
      <h1>Resources</h1>
      <ResourceList resources={resources} onDelete={handleDeleteResource} />
      <ResourceForm onCreate={handleCreateResource} />
    </div>
  );
}

export default App;