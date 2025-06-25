
import React from 'react';
import { Card } from '@/components/ui/card';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
      skills: [
        { name: 'C++', level: 95 },
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'SQL', level: 100 },
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Tools & Frameworks',
      icon: '🛠️',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Flask', level: 85 },
        { name: 'MySQL', level: 100 },
        { name: 'Git', level: 90 },
      ],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Domains',
      icon: '🎯',
      skills: [
        { name: 'AI/ML', level: 88 },
        { name: 'Quantitative Finance', level: 85 },
        { name: 'Web Development', level: 90 },
        { name: 'Data Structures', level: 100 },
        { name: 'Algorithms', level: 100 },
      ],
      gradient: 'from-purple-500 to-pink-600'
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and domain expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={category.title} className="p-6 glass-dark hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gradient">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-background/30 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 3 + skillIndex) * 200}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-background/20 rounded-lg">
                <div className="flex items-center justify-center space-x-2">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.gradient} animate-pulse`}></div>
                  <span className="text-sm font-medium">Expert Level</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 glass-dark max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Approach</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. 
              My approach combines theoretical knowledge with practical implementation, 
              ensuring robust and scalable solutions for complex problems.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
