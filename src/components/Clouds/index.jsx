import './styles.modules.css'

export function Clouds ({ cloud }) {
  return (
    <>
      <img
        className={`cloud ${cloud}`}
        src='./cloud.svg'
        loading='lazy'
        alt=''
      />
    </>
  )
}
