import './styles.modules.css'

export function Image ({ classname, src, alt = '' }) {
  return (
    <>
      <img
        className={classname}
        src={src}
        loading='lazy'
        alt={alt}
      />
    </>
  )
}
