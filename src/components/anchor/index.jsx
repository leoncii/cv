
export function Anchor ({ href, text }) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer nofollow'
    >
      {text}
    </a>
  )
}
