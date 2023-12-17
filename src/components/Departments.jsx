import React from 'react';
import 'Departments.css';
import "App.css"

const departmentsData = [
  {
    name: 'Competitive Programming',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbXBldGl0aXZlJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D',
    description: 'Competitive programming challenges coders to solve complex problems within time constraints, refining algorithmic and problem-solving skills. Join to sharpen your coding efficiency, algorithm prowess, and strategic thinking for competitive success.',
  },
  {
    name: 'Development',
    image: 'https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg',
    description: 'For comprehensive web and app development, leverage Visual Studio Code for coding, GitHub for version control, and React for dynamic web interfaces. For app development, use Android Studio (Java/Kotlin) or Xcode (Swift) paired with Flutter or React Native for efficient cross-platform compatibility and streamlined development workflows.',
  },
  {
    name: 'ML/AI',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Machine learning, part of computer science, teaches computers to learn from data without explicit programming. Explore algorithms and tools like TensorFlow for data-driven problem-solving and innovation.',
  },
  {
    name: 'Cybersecurity',
    image: 'https://bau.edu/blog/wp-content/uploads/2021/12/how-to-become-an-ethical-hacker-820x548.jpg',
    description: 'Cybersecurity and hacking delve into protecting systems from unauthorized access and ensuring data safety. Explore ethical hacking, encryption techniques, and defensive strategies to defend against cyber threats and safeguard sensitive information.',
  },
  {
    name: 'GDSC',
    image: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/logo_QTdLJEf.jpg',
    description: 'GDSCs, backed by Google, unite students to explore tech through workshops and projects, fostering collaboration and skill development. They offer a platform to learn, create, and connect with industry professionals.',
  },
];

const Departments = () => {
  return (
    <div className="departments-container">
    <div className='about'>
      <h1 className='about text-5xl text-white font-bold pb-8'>Departments</h1>
      </div> 
      <div className="departments-cards">
        {departmentsData.map((department, index) => (
          <div key={index} className={`department-card ${index === 3 || index === 4 ? 'double-width' : ''}`}>
            <img src={department.image} alt={department.name} />
            <div className="department-info">
              <h3>{department.name}</h3>
              <div className="department-info-content">
                <p>{department.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;