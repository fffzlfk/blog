const Image = ({ src, width, height }) => {
  return <img className={`w-${width || "fit"} h-${height || "fit"} mx-auto my-auto`} src={src.replace(/%22/g, '')} />
}

export default Image