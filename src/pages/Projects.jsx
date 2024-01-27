import { currentProjects, otherProjects } from '../constants'
import CTA from '../components/CTA'

import ProjectList from '../components/ProjectList'
import TimeLine from '../components/TimeLine'

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        My{' '}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          Projects
        </span>
      </h1>
      <div className='mt-5 flex flex-col text-slate-500 gap-3'>
        <p>
          Explore my Projects page to delve into a collection of my works,
          reflecting a commitment to problem-solving and coding proficiency.
          From web applications to silly games, each item here is a showcase of
          my coding endeavors, providing a glimpse into the diverse range of
          projects I've undertaken.
        </p>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Featured Projects</h3>

        <div className='mt-12 flex'>
          <TimeLine />
        </div>
      </div>
      <hr className='border-slate-200' />
      <div className='py-16'>
        <h3 className='subhead-text'>Other Projects</h3>
        <ProjectList projects={otherProjects} type='other' />
      </div>
      <hr className='border-slate-200' />
      <div className='py-16'>
        <h3 className='subhead-text' type='current'>
          Current Projects
        </h3>
        <ProjectList projects={currentProjects} />
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects
