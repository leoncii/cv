import './module.styles.css'

export function Anchor ({ href, text = '', className = null }) {
  return (
    <a
      href={href}
      className={className}
      target='_blank'
      rel='noreferrer nofollow'
    >
      {text}
    </a>
  )
}
