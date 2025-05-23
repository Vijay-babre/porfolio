import { Config } from '../types';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Youtube,
  Globe
} from 'lucide-react';

const config: Config = {
  personalInfo: {
    name: "Vijay Dhondibarao Babre",
    jobTitle: "Full Stack Web Developer",
    shortBio: "Passionate IT graduate skilled in building web applications with modern JavaScript frameworks and backend technologies.",
    fullBio: `I'm an enthusiastic IT graduate with a Bachelor of Science degree, eager to contribute to innovative web development projects. With hands-on experience in HTML, CSS, Bootstrap, JavaScript, jQuery, React.js, Node.js, Express.js, and MongoDB, I have honed my skills through a web development internship at Code Clause, where I received a recommendation for exemplary performance. 

    I thrive on learning new technologies and delivering high-quality solutions. Fluent in English, Hindi, Marathi, and Kannada, I bring strong communication skills to collaborative environments. In my free time, I enjoy exploring new tech trends and staying updated with industry advancements.`,
    avatarUrl: "https://i.ibb.co/VpzZbCgd/1728644293937.jpg", // Retained placeholder as no avatar provided
    resumeLink: "../../public/Vijay_Babre.pdf",
    email: "vijaybabre0@gmail.com",
    location: "Bidar, Karnataka, India",
    socialLinks: [
      {
        platform: "GitHub",
        url: "https://github.com/vijaybabre", // Placeholder, update with actual link if available
        icon: "Github"
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/vijaybabre-undefined-5b0795292/",
        icon: "Linkedin"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com/vijaybabre", // Placeholder, update with actual link if available
        icon: "Twitter"
      },
      {
        platform: "Instagram",
        url: "https://instagram.com/vijaybabre", // Placeholder, update with actual link if available
        icon: "Instagram"
      }
    ]
  },
  theme: {
    primaryColor: "#3a86ff",
    secondaryColor: "#8338ec",
    accentColor: "#ff006e",
    backgroundColor: "#ffffff",
    backgroundGradient: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    darkModeDefault: false
  },
  microblog: {
    maxWordLimit: 500,
    enableTags: true,
    dateFormat: "MMMM dd, yyyy"
  },
  seo: {
    siteTitle: "Vijay Babre | Full Stack Web Developer",
    siteDescription: "Personal portfolio of Vijay Babre, a full stack web developer passionate about creating modern web applications.",
    siteKeywords: ["web development", "react", "node.js", "javascript", "mongodb", "full stack"]
  },
  skills: [
    { name: "HTML", level: 90, category: "Frontend" },
    { name: "CSS", level: 85, category: "Frontend" },
    { name: "Bootstrap", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 80, category: "Frontend" },
    { name: "jQuery", level: 75, category: "Frontend" },
    { name: "React.js", level: 70, category: "Frontend" },
    { name: "Node.js", level: 70, category: "Backend" },
    { name: "Express.js", level: 65, category: "Backend" },
    { name: "MongoDB", level: 65, category: "Database" },
    { name: "Git", level: 70, category: "Tools" }, // Assumed basic proficiency
    { name: "VS Code", level: 80, category: "Tools" }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Matrimony Application",
      description: "A matchmaking platform with user profile management, secure authentication, and communication features, built with a robust backend.",
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      technologies: ["Spring Boot", "Java", "MySQL"],
      liveUrl: "",
      repoUrl: "https://github.com/prathambabre/matrimony-app" // Placeholder retained
    },
    {
      id: "proj-2",
      title: "Finance Application",
      description: "A responsive financial services app with dynamic forms and real-time data visualization for budgeting and transaction tracking.",
      imageUrl: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
      technologies: ["Ionic", "Angular", "PostgreSQL"],
      liveUrl: "",
      repoUrl: "https://github.com/prathambabre/finance-app" // Placeholder retained
    },
    {
      id: "proj-3",
      title: "BachatGat Application",
      description: "An intuitive financial management app for small savings groups, featuring dynamic card-based dashboards and real-time transaction tracking.",
      imageUrl: "https://images.pexels.com/photos/7172706/pexels-photo-7172706.jpeg",
      technologies: ["Ionic", "Angular", "MongoDB"],
      liveUrl: "",
      repoUrl: "https://github.com/prathambabre/bachatgat-app" // Placeholder retained
    }
  ],
  blogPosts: [
    {
      id: "blog-1",
      title: "Getting Started with TypeScript in 2025",
      excerpt: "A beginner's guide to TypeScript and why it's still relevant in 2025.",
      content: `
## Getting Started with TypeScript in 2025

TypeScript has been around for over a decade now, but its relevance and importance in modern web development continue to grow. In this post, I'll walk you through the basics of TypeScript and why it's worth learning in 2025.

### What is TypeScript?

TypeScript is a strongly typed programming language that builds on JavaScript. It adds static typing to JavaScript, which can help catch errors early in the development process and improve code quality.

### Why TypeScript in 2025?

Even with the advancements in JavaScript, TypeScript offers several advantages:

1. **Type Safety**: Catch errors at compile time rather than runtime
2. **Better IDE Support**: Enhanced autocomplete and error detection
3. **Improved Readability**: Types serve as documentation
4. **Enterprise Adoption**: Many large codebases use TypeScript

### Setting Up a TypeScript Project

Here's a quick guide to setting up a new TypeScript project:

\`\`\`bash
# Install TypeScript globally
npm install -g typescript

# Create a new project directory
mkdir ts-project
cd ts-project

# Initialize a new npm project
npm init -y

# Install TypeScript as a dev dependency
npm install --save-dev typescript

# Create a tsconfig.json file
npx tsc --init

# Create your first TypeScript file
touch index.ts
\`\`\`

### Basic TypeScript Examples

\`\`\`typescript
// Basic types
let name: string = "Alex";
let age: number = 30;
let isActive: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: Array<string> = ["Alice", "Bob", "Charlie"];

// Functions
function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

// Interfaces
interface User {
  id: number;
  name: string;
  email: string;
  isAdmin?: boolean; // Optional property
}

const user: User = {
  id: 1,
  name: "Alex",
  email: "alex@example.com"
};

// Classes
class Person {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  greet(): string {
    return \`Hello, my name is \${this.name}\`;
  }
}

const person = new Person("Alex");
console.log(person.greet());
\`\`\`

### Conclusion

TypeScript continues to be a valuable tool in a developer's toolkit in 2025. Its type system helps create more robust applications while still allowing you to leverage the flexibility and ecosystem of JavaScript.

Stay tuned for more TypeScript tips and tricks in future posts!
      `,
      date: "2025-01-15",
      tags: ["TypeScript", "JavaScript", "Web Development"],
      imageUrl: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg"
    },
    {
      id: "blog-2",
      title: "The Future of React: What's Coming in 2025",
      excerpt: "Exploring the latest features and trends in React development.",
      content: `
## The Future of React: What's Coming in 2025

React has been a dominant force in frontend development for years, and 2025 brings exciting new developments to this beloved library. Let's explore what's new and what's on the horizon.

### React's Latest Features

The React team has been busy rolling out new features that make development more efficient and performant:

#### 1. Enhanced Server Components

Server Components have matured significantly, allowing for better separation of server and client logic. This results in smaller bundle sizes and improved performance.

#### 2. Improved Concurrent Rendering

Concurrent Mode is now fully stable, enabling React to work on multiple tasks simultaneously without blocking the main thread.

#### 3. Automatic Memory Management

New memory management features help prevent common memory leaks in large applications.

### React Ecosystem in 2025

The ecosystem around React continues to evolve:

1. **Next.js and Remix**: These frameworks have become even more powerful, offering enhanced developer experiences.
   
2. **State Management**: Libraries like Zustand and Jotai have gained popularity for their simplicity and performance.

3. **Testing**: New testing utilities make it easier to test React components without worrying about implementation details.

### Code Example: Modern React in 2025

\`\`\`tsx
// Using the latest React features in 2025

import { use, startTransition } from 'react';
import { fetchData } from './api';

// A simple data fetching component
function UserProfile({ userId }) {
  // 'use' is the new hook for data fetching
  const user = use(fetchData(\`/api/users/\${userId}\`));

  const handleUpdateProfile = (newData) => {
    // startTransition marks non-urgent updates
    startTransition(() => {
      updateUserProfile(userId, newData);
    });
  };

  return (
    <div className="profile-card">
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <ProfileForm 
        initialData={user} 
        onSubmit={handleUpdateProfile} 
      />
    </div>
  );
}

// A component that optimizes rendering
function OptimizedList({ items }) {
  return (
    <ul>
      {/* Auto-batched updates, no need for memo in many cases */}
      {items.map(item => (
        <ListItem key={item.id} data={item} />
      ))}
    </ul>
  );
}
\`\`\`

### Conclusion

React continues to evolve in ways that improve developer experience while maintaining its commitment to performance and simplicity. By embracing these new features and patterns, you can build more efficient and maintainable applications in 2025.

What React feature are you most excited about? Let me know in the comments!
      `,
      date: "2025-02-10",
      tags: ["React", "JavaScript", "Frontend"],
      imageUrl: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
    },
    {
      id: "blog-3",
      title: "Building a Personal Brand as a Developer",
      excerpt: "Tips and strategies for establishing yourself as a respected developer in the industry.",
      content: `
## Building a Personal Brand as a Developer

In today's competitive tech landscape, having strong technical skills is just the beginning. Building a personal brand can significantly impact your career opportunities and professional growth. Here's how to get started.

### Why Personal Branding Matters for Developers

Personal branding isn't just for marketers or influencers. As a developer, your brand can:

1. **Attract Job Opportunities**: Recruiters often search for developers with established reputations.
2. **Build Trust**: A strong brand helps establish credibility with clients and employers.
3. **Create Networking Opportunities**: Other professionals are more likely to connect with someone whose work they recognize.
4. **Share Knowledge**: Branding often involves content creation, which helps others while establishing you as an authority.

### Key Elements of a Developer's Personal Brand

#### 1. Define Your Niche

While being a generalist has its advantages, focusing on a specific area can help you stand out:

- Frontend development with React
- Backend systems with Node.js
- DevOps and cloud infrastructure
- Mobile development with React Native or Flutter

#### 2. Create a Professional Online Presence

Your digital footprint is crucial:

- **Portfolio Website**: Showcase your best work and share your journey
- **GitHub Profile**: Maintain clean, well-documented repositories
- **LinkedIn**: Keep it updated with your latest accomplishments
- **Twitter/X**: Engage with the developer community

#### 3. Content Creation

Sharing knowledge is one of the most effective ways to build your brand:

- **Technical Blog**: Write about solutions to problems you've solved
- **Open Source Contributions**: Contribute to projects you use and love
- **Speaking at Events**: Start with local meetups and work your way up
- **YouTube Tutorials**: Create visual content explaining complex concepts

### Practical Steps to Get Started

1. **Audit Your Current Online Presence**
   - Google yourself and see what comes up
   - Review your social media profiles for professionalism

2. **Define Your Brand Values**
   - What do you stand for as a developer?
   - What unique perspective do you bring?

3. **Create a Content Calendar**
   - Plan regular content creation (weekly blog posts, monthly videos)
   - Be consistent rather than perfect

4. **Engage with the Community**
   - Respond to questions on Stack Overflow
   - Participate in Twitter discussions
   - Attend virtual or in-person meetups

### Conclusion

Building a personal brand takes time and consistent effort, but the professional benefits are well worth it. Start small, focus on providing value, and your reputation will grow naturally.

Remember: authenticity matters. Don't try to be someone you're not—your unique voice and perspective are what will make your brand stand out.

What steps will you take to build your developer brand this week?
      `,
      date: "2025-03-05",
      tags: ["Career", "Personal Development", "Professional Growth"],
      imageUrl: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
    }
  ]
};

export default config;