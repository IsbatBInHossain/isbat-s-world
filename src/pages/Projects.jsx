import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences, otherProjects, projects } from '../constants'
import CTA from '../components/CTA'
import { arrow, github, web } from '../assets/icons'
import { Link } from 'react-router-dom'

// ... (other imports)

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
          <VerticalTimeline>
            {projects.map(project => (
              <VerticalTimelineElement
                key={project.title}
                date={project.date}
                iconStyle={{ background: project.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={project.icon}
                      alt={project.title}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: project.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {project.title}
                  </h3>
                  <p className='text-slate-500 !text-xs !font-normal !mt-4'>
                    {project.description}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {project.features.map((feature, index) => (
                    <li
                      key={`project-feature-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className='flex justify-between items-center px-16'>
                  <Link
                    to={project['project-url']}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-slate-500 hover:text-blue-500'
                  >
                    <img
                      src={github}
                      alt='github link'
                      width={16}
                      height={16}
                    />
                  </Link>
                  <Link
                    to={project['live-link']}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-slate-500 hover:text-blue-500'
                  >
                    <img src={web} alt='live link' width={16} height={16} />
                  </Link>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <div className='py-16'>
        <h3 className='subhead-text'>Other Projects</h3>
        <div className='flex flex-wrap my-20 gap-16'>
          {otherProjects.map(project => (
            <div className='lg:w-[400px] w-full' key={project.name}>
              <div className='block-container w-12 h-12'>
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={project.iconUrl}
                    alt='threads'
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>

              <div className='mt-5 flex flex-col'>
                <h4 className='text-2xl font-poppins font-semibold'>
                  {project.name}
                </h4>
                <p className='mt-2 text-slate-500'>{project.description}</p>
                <div className='mt-5 flex items-center gap-2 font-poppins'>
                  <Link
                    to={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='font-semibold text-blue-600'
                  >
                    Code Repo Link
                  </Link>
                  <img
                    src={arrow}
                    alt='arrow'
                    className='w-4 h-4 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects
