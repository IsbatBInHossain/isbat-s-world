import { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'
import Fox from '../models/Fox'
import Loader from '../components/Loader'
import useAlert from '../hooks/useAlert'
import Alert from '../components/Alert'

const initialState = {
  name: '',
  email: '',
  message: '',
}

const Contact = () => {
  const [form, setForm] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)
  const [currentAnimation, setCurrentAnimation] = useState('idle')
  const formRef = useRef(null)
  const { alert, showAlert, hideAlert } = useAlert()

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  const handleFocus = () => setCurrentAnimation('walk')
  const handleBlur = () => setCurrentAnimation('idle')

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Isbat',
          from_email: form.email,
          to_email: 'isbatbinhossain@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        showAlert({
          show: true,
          message: 'Your mail has been delivered successfully',
          type: 'success',
        })

        setIsLoading(false)
        setTimeout(() => {
          hideAlert()
          setCurrentAnimation('idle')
          setForm(initialState)
        }, 3000)
      })
      .catch(e => {
        console.log(e)
        setIsLoading(false)
        setCurrentAnimation('idle')
        showAlert({
          show: true,
          message: 'Sorry, failed to send mail',
          type: 'danger',
        })
      })
  }
  return (
    <section className='flex-col flex lg:flex-row relative max-container'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in Touch</h1>
        <form
          className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label className='text-black-500 font-semibold'>
            Name
            <input
              className='input'
              name='name'
              placeholder='i.e. Sherlock Holmes'
              required
              value={form.name}
              type='text'
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              className='input'
              name='email'
              placeholder='i.e. sherlock222B@bakerstreet.com'
              value={form.email}
              type='email'
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              name='message'
              className='textarea'
              rows={4}
              placeholder='Type your message here...'
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
          </label>
          <button
            type='submit'
            className='btn'
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={isLoading}
          >
            {isLoading ? 'Sending Your Message...' : 'Send Message'}
          </button>
        </form>
      </div>
      <div className=' lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
