import { ImgHTMLAttributes } from 'react';
import styles  from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({hasBorder, src, alt}: AvatarProps) {
  return (
    <img
      src={src}
      className={hasBorder ? styles.avatarWithoutBorder : styles.avatar}
      alt={alt}
    />
  )
} 