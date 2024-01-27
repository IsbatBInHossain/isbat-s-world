import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { Link } from 'react-router-dom'
import 'react-vertical-timeline-component/style.min.css'
import { projects } from '../constants'
import { github, web } from '../assets/icons'

const TimeLine = () => {
  return (
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
              <img src={github} alt='github link' width={16} height={16} />
            </Link>
            {project['live-link'] && (
              <Link
                to={project['live-link']}
                target='_blank'
                rel='noopener noreferrer'
                className='text-slate-500 hover:text-blue-500'
              >
                <img src={web} alt='live link' width={16} height={16} />
              </Link>
            )}
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default TimeLine
