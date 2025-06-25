
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'APPOINTA-CARE',
      description: 'AppointaCare is a full-stack MERN doctor appointment app featuring patient, doctor, and admin roles, online payments, and a modern health tracker for sharing wellness data and visualization. The platform offers a user-friendly interface with advanced features like onboarding, and detailed health management.',
      tech: ['expressjs', 'nodejs', 'reactjs', 'mongodb','vitejs','razorpay','tailwindcss','axios','cloudinary'],
      github: 'https://github.com/sparsh-rastogi-coder/AppointaCare',
      demo: 'https://appointa-care-exze.vercel.app',
      image: '🔢',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'AI-Powered Portfolio Optimizer',
      description: 'Machine learning-based portfolio optimization tool that uses modern portfolio theory and reinforcement learning.',
      tech: ['Python', 'Scikit-learn', 'Flask', 'React'],
      github: '#',
      demo: '#',
      image: '📊',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Real-time Data Analytics Dashboard',
      description: 'Full-stack web application for real-time financial data visualization with advanced charting and analytics capabilities.',
      tech: ['React', 'TypeScript', 'Node.js', 'WebSocket'],
      github: '#',
      demo: '#',
      image: '📈',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Competitive Programming Tracker',
      description: 'A platform to track competitive programming progress across multiple platforms with advanced analytics and insights.',
      tech: ['React', 'Python', 'FastAPI', 'MongoDB'],
      github: '#',
      demo: '#',
      image: '🏆',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'Neural Network Visualizer',
      description: 'Interactive web application for visualizing neural network architectures and training processes in real-time.',
      tech: ['JavaScript', 'D3.js', 'TensorFlow.js', 'WebGL'],
      github: '#',
      demo: '#',
      image: '🧠',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'Smart Research Assistant',
      description: 'AI-powered research assistant that helps in literature review and paper summarization using NLP techniques.',
      tech: ['Python', 'BERT', 'Streamlit', 'Elasticsearch'],
      github: '#',
      demo: '#',
      image: '📚',
      gradient: 'from-teal-500 to-green-600'
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work showcasing skills in AI, web development, and quantitative finance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.title} className="group glass-dark hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="p-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {project.image}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gradient">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background/50 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className={`flex-1 bg-gradient-to-r ${project.gradient} text-white border-none hover:scale-105 transition-all`}
                    onClick={() => window.open(project.demo, '_blank')}
                  >
                    Demo
                  </Button>
                </div>
              </div>

              <div className={`h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 glass-dark max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Open Source Contributions</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I actively contribute to open source projects and believe in the power of collaborative development. 
              Check out my GitHub for more projects and contributions to the developer community.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="bg-gradient-primary text-white border-none hover:scale-105 transition-all duration-300"
              onClick={() => window.open('https://github.com/sparsh-rastogi-coder?tab=repositories', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
