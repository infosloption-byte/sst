import type { ReactNode } from 'react'
import { Link } from '@/router'

interface ButtonProps {
  href: string
  variant?: 'primary' | 'outline'
  /** Open in a new tab (for off-site links). */
  external?: boolean
  icon?: ReactNode
  className?: string
  children: ReactNode
}

/** A call-to-action link. Internal paths use the client router; everything else is a normal link. */
export function Button({
  href,
  variant = 'primary',
  external = false,
  icon,
  className,
  children,
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  )

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }
  if (href.startsWith('/')) {
    return (
      <Link className={classes} to={href}>
        {content}
      </Link>
    )
  }
  return (
    <a className={classes} href={href}>
      {content}
    </a>
  )
}
