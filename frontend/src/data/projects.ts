export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform 3D',
    description: 'A full-stack e-commerce solution with 3D product previews and a custom admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js', 'Three.js', 'Tailwind', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'AI Analytics Dashboard',
    description: 'Real-time data visualization dashboard powered by machine learning algorithms.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'D3.js', 'Python', 'FastAPI'],
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    title: 'Interactive WebGL Experience',
    description: 'Award-winning promotional website featuring complex shader animations and fluid simulations.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
    tags: ['WebGL', 'GLSL', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: '#'
  }
];
