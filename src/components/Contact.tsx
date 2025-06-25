import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BarChart, Github , icons, Linkedin, Mail, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );


    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  } catch (error) {
    toast({
      title: "Error",
      description: "Something went wrong. Please try again later.",
      variant: "destructive"
    });
  }

  setIsSubmitting(false);
};


  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sparsh-rastogi-coder',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/sparsh-rastogi-3a72a3285/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sparshrastogiclass11@gmail.com',
      color: 'hover:text-red-400'
    },
    {
      name:'codeforces',
      icon: BarChart,
      url:'https://codeforces.com/profile/_gajju',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, internship, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card className="p-8 glass-dark">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border focus:border-primary"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="bg-background/50 border-border focus:border-primary"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="bg-background/50 border-border focus:border-primary resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-green hover:scale-105 transition-all duration-300 text-lg py-6"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="p-8 glass-dark">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Whether you're interested in collaboration, have a project idea, or just want to 
                discuss the latest trends in AI and quantitative finance or web dev, I'd love to hear from you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>sparshrastogiclass11a@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <span className="w-5 h-5 text-primary">📍</span>
                  <span>IIT Patna, Bihar, India</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-background/50 rounded-lg">
                  <span className="w-5 h-5 text-primary">⏰</span>
                  <span>Available for opportunities</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 glass-dark">
              <h3 className="text-xl font-bold mb-6 text-gradient">Follow Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    className={`p-4 h-auto bg-background/50 border-border hover:scale-105 transition-all duration-300 ${link.color}`}
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <link.icon className="w-6 h-6" />
                      <span className="text-sm font-medium">{link.name}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
