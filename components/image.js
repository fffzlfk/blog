const Image = ({ src }) => {
    return <img className='w-3/5 mx-auto my-auto' src={src.replace(/%22/g, '')} />
  }

export default Image