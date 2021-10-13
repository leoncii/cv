import './styles.css'

export function Anchor ({
  href,
  text = '',
  download = null,
  className = null
}) {
  return (
    <a
      download={download !== null ? download : ''}
      href={href}
      className={className}
      target='_blank'
      rel='noreferrer nofollow'
    >
      {text}
    </a>
  )
}
