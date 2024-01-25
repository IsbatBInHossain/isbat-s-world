const Alert = ({ type, message }) => {
  return (
    <div className=' flex justify-center items-center absolute top-10 left-0 right-0'>
      <div
        className={`${
          type === 'danger' ? 'bg-red-800' : 'bg-blue-800'
        }  flex items-center p-2 lg:inline-flex text-indigo-100 lg:rounded-full`}
        role='alert'
      >
        <p
          className={`${
            type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
          } flex rounded-full uppercase px-2 py-1 mr-3 font-semibold text-xs`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className=' mr-2 text-left'>{message}</p>
      </div>
    </div>
  )
}

export default Alert
