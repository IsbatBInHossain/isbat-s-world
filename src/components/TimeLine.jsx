import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import { Link } from 'react-router-dom'
import 'react-vertical-timeline-component/style.min.css'
import { projects } from '../constants'
import { github, web } from '../assets/icons'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const TimeLine = () => {
  const theme = useContext(ThemeContext)
  const isDark = theme === 'dark'
  return (
    <VerticalTimeline lineColor={`${isDark ? '#1e293b' : 'white'}`}>
      {projects.map(project => (
        <VerticalTimelineElement
          key={project.title}
          date={project.date}
          iconStyle={{
            background: project.iconBg,
          }}
          icon={
            <Link
              to={
                project['live-link']
                  ? project['live-link']
                  : project['project-url']
              }
              target='_blank'
              rel='noopener noreferrer'
              className='flex justify-center cursor-pointer items-center w-full h-full '
            >
              <img
                src={project.icon}
                alt={project.title}
                className='w-[60%] h-[60%] object-contain hover:rotate-[360deg] ease-in-out transition-all duration-700'
              />
            </Link>
          }
          contentStyle={{
            borderBottom: '8px',
            borderStyle: 'solid',
            borderBottomColor: project.iconBg,
            boxShadow: 'none',
            backgroundColor: `${isDark ? '#1e293b' : 'white'}`,
          }}
        >
          <div>
            <h3 className='text-black dark:text-ash text-xl font-poppins font-semibold'>
              {project.title}
            </h3>
            <p className='text-slate-500 dark:text-white !text-xs !font-normal !mt-4'>
              {project.description}
            </p>
          </div>

          <ul className='my-5 list-disc ml-5 space-y-2'>
            {project.features.map((feature, index) => (
              <li
                key={`project-feature-${index}`}
                className='text-black-500/50 dark:text-white font-normal pl-1 text-sm'
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
              className=' rounded-full p-2 bg-ash'
            >
              <img
                src={github}
                alt='github link'
                className=' hover:scale-125 transition-all duration-500'
                width={16}
                height={16}
              />
            </Link>
            {project['live-link'] && (
              <Link
                to={project['live-link']}
                target='_blank'
                rel='noopener noreferrer'
                className=' rounded-full p-2 bg-ash'
              >
                <img
                  src={web}
                  alt='live link'
                  width={16}
                  height={16}
                  className=' hover:scale-125 transition-all duration-500'
                />
              </Link>
            )}
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default TimeLine
