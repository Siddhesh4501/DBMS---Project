import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = (props) => {
  console.log(props)
  return(
    <Main>
      <Link to="/">
      
      <button
        type="submit"
        className="button is-block is-info is-fullwidth"
      >
        Go Back To Filter Page
      </button>
      </Link>
    </Main>
  )
  // <Main
  //   title="Projects"
  //   description="Learn about Michael D'Angelo's projects."
  // >
    // <article className="post" id="projects">
    //   <header>
    //     <div className="title">
    //       <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
    //       <p>A selection of projects that I&apos;m not too ashamed of</p>
    //     </div>
    //   </header>
    //   {data.map((project) => (
    //     <Cell
    //       data={project}
    //       key={project.title}
    //     />
    //   ))}
    // </article>
  // </Main>
};

export default Projects;
