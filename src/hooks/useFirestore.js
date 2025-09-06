import { useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  orderBy,
  query 
} from 'firebase/firestore';
import { db } from '../firebase';

export const useFirestore = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, 'projects'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const projectsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProjects(projectsData);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  // Add new project
  const addProject = async (projectData) => {
    try {
      const docRef = await addDoc(collection(db, 'projects'), {
        ...projectData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      await fetchProjects(); // Refresh list
      return docRef.id;
    } catch (error) {
      console.error('Error adding project:', error);
      throw error;
    }
  };

  // Update project
  const updateProject = async (projectId, projectData) => {
    try {
      const projectRef = doc(db, 'projects', projectId);
      await updateDoc(projectRef, {
        ...projectData,
        updatedAt: new Date()
      });
      await fetchProjects(); // Refresh list
    } catch (error) {
      console.error('Error updating project:', error);
      throw error;
    }
  };

  // Delete project
  const deleteProject = async (projectId) => {
    try {
      await deleteDoc(doc(db, 'projects', projectId));
      await fetchProjects(); // Refresh list
    } catch (error) {
      console.error('Error deleting project:', error);
      throw error;
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    addProject,
    updateProject,
    deleteProject,
    fetchProjects
  };
};