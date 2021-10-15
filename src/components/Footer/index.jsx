import './styles.css'

export function Footer () {
  // href='https://wa.link/2ac08o'
  return (
    <>
      <div className='footer'>
        <h5>Leonardo Torrico Becerra</h5>
        <a
          id='whatsapp'
          rel='noreferrer noopener'
          target='_blank'
          href='https://wa.link/2ac08o'
        >
          <img
            src='./whatsapp.svg'
            alt='contactar por WhatsApp'
          />
        </a>
      </div>
    </>
  )
}
