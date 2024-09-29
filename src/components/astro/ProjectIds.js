/* Component for making project searches faster and easier. Returns dictionary/hash of projects by their IDs */
import { getCollection } from 'astro:content';

const base = import.meta.env.BASE_URL == '/' ? '' : import.meta.env.BASE_URL;

// Fetch the projects and build the tech counts
const projects = await getCollection('projects');
let projectIds = {};

// Build tech counts from the projects
projects.forEach(project => {
  // Add the computed slug here
  project.data.slug = `${base}/projects/${project.data.year}/${project.data.semester}/${project.data.id}`;
  projectIds[project.data.id] = project;
});

export default projectIds;