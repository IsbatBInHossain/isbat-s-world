import { skills } from '../constants'

const About = () => {
  return (
    <section className=' max-container'>
      <h1 className='head-text'>
        Hello, I'm{' '}
        <span className=' blue-gradient_text font-semibold drop-shadow'>
          Isbat
        </span>
      </h1>
      <div className=' mt-5 flex flex-col text-slate-500 gap-3'>
        <p>
          Full Stack Web Developer based in Bangladesh, passionate about
          creating innovative and efficient web solutions.
        </p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>
        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map(skill => (
            <div key={skill.name} className='block-container w-20 h-20'>
              {/* TODO: Fix Animation */}
              <div className='btn-front relative rounded-xl flex justify-center items-center'>
                <div className=' btn-back rounded-xl' />
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
