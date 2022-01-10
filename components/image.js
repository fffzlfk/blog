const Image = ({ src, width }) => {
  return <img className={`w-${width === undefined ? 'fit' : width} mx-auto my-auto`} src={src.replace(/%22/g, '')} />
}

export default Image