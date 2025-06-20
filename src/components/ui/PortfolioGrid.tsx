import React from "react";
import { Link } from "react-router-dom";
import styles from "../../pages/Work/Work.module.css";
import { Project } from "../../pages/Work/types";

interface PortfolioGridProps {
  projects: Project[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  return (
    <section className={styles.portfolioSection}>
      <div className={styles.row}>
        {projects.map((project) => (
          <div key={project.id} className={styles.col}>
            <Link to={project.link} className={styles.imgContainer}>
              <img src={project.image} alt={project.title} />
              <div className={styles.overlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
