import React from "react";
import "./About.css";
import { SEO } from "../../components/seo/SEO";

interface TeamMember {
  name: string;
  location: string;
  image: string;
}

interface Service {
  name: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Arun Kumar",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/08/Arun-Kumar.jpg",
  },
  {
    name: "Brijesh",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/08/Brijesh.jpg",
  },
  {
    name: "Ishita Sharma",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/08/Ishita-Sharma.jpg",
  },
  {
    name: "Karthik Ramesh",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/07/Karthik-Ramesh.jpg",
  },
  {
    name: "Mahesh Vorkady",
    location: "Bengaluru",
    image: `https://veeville-website.s3.ap-south-1.amazonaws.com/Images/About+Images/Mahesh.webp`,
  },
  {
    name: "Rajesh Vorkady",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/07/Rajesh-Vorkady.jpg",
  },
  {
    name: "Methun James",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/07/Methun-James.jpg",
  },
  {
    name: "Srividhya A R",
    location: "Bengaluru",
    image: "https://veeville.com/wp-content/uploads/2023/07/Srividhya-A-R.jpg",
  },
  {
    name: "Bharat Ramanath",
    location: "Bengaluru",
    image: `https://veeville-website.s3.ap-south-1.amazonaws.com/Images/About+Images/Bharath.webp`,
  },
];

const services: Service[] = [
  {
    name: "Brand Identity",
    image: "https://veeville.com/wp-content/uploads/2023/05/Brand-identity.png",
  },
  {
    name: "Book Design",
    image: "https://veeville.com/wp-content/uploads/2023/05/Book-Design.png",
  },
  {
    name: "Communication Design",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Communication-Design.png",
  },
  {
    name: "Digital Design",
    image: "https://veeville.com/wp-content/uploads/2023/05/Digital-Design.png",
  },
  {
    name: "Employee Engagement",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Employee-engagement.png",
  },
  {
    name: "Environment Graphics",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Environment-Graphics.png",
  },
  {
    name: "Exhibition Design",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Exhibition-Design.png",
  },
  {
    name: "Film & Motion Graphics",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Film-and-Motion-Graphics.png",
  },
  {
    name: "Learning & Development",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Learning-and-Development.png",
  },
  {
    name: "Package Design",
    image: "https://veeville.com/wp-content/uploads/2023/05/Package-Design.png",
  },
  {
    name: "Sound Design",
    image: "https://veeville.com/wp-content/uploads/2023/05/Sound-Design.png",
  },
  {
    name: "Technology Design",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Technology-Design.png",
  },
  {
    name: "Experience Design",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Experience-Design.png",
  },
  {
    name: "Human Capital Management",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Human-Capital-Management.png",
  },
  {
    name: "Design Consulting",
    image:
      "https://veeville.com/wp-content/uploads/2023/05/Design-Consulting.png",
  },
];

const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Veeville - Our Story & Services | Global Marketing Company"
        description="Learn about Veeville, a global integrated marketing company offering services across IT, retail, healthcare, FMCG, and more sectors. Discover our comprehensive marketing solutions and creative expertise."
        canonicalUrl="/about"
        keywords={[
          "about veeville",
          "marketing company",
          "brand strategy",
          "creative development",
          "digital marketing",
          "global marketing",
          "integrated marketing",
        ]}
      />
      <section className="stamina-banner">
        <img
          src={`https://veeville-website.s3.ap-south-1.amazonaws.com/Project-Images/thumbnails/About+banner.webp`}
          alt="Banner Image"
          className="stamina-banner__image"
        />
      </section>

      <section className="vee-section">
        <div className="vee-container">
          <div className="vee-text">
            <h1>Namaskara!</h1>
            <p>
              Veeville is a global integrated marketing company that offers an
              assortment of marketing services to organisations across a
              multitude of sectors including information technology, retail,
              healthcare, FMCG, hospitality, food & beverage, manufacturing and
              more.
            </p>
            <p>
              Our solutions include brand strategy, creative development,
              campaign planning and execution, on-ground experience design,
              digital marketing and custom technology design. We also provide
              services like public relations, media planning & buying, and
              performance tracking & optimisation through our partner
              organisations for our clients across the globe.
            </p>
            <p>Explore this site and discover some of our recent work.</p>
          </div>
          <div className="vee-image">
            <img
              src="https://veeville.com/wp-content/uploads/2023/05/Tagline.png"
              alt="Badge"
            />
          </div>
        </div>
      </section>

      <section className="what-we-do">
        <div className="container">
          <h2 className="section-titles">What We Do</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-item">
                <img src={service.image} alt={service.name} />
                <p>{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="people-section">
        <h2 className="team-title">Team Members</h2>
        <div className="people-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="person">
              <img src={member.image} alt={member.name} />
              <div className="person-info">
                <h3>{member.name}</h3>
                <p>{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AboutPage;
