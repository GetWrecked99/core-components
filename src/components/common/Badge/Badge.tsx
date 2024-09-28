import { cn } from '@core/utils/common/cn'

import type { default as IBadgeProps } from './Badge.types'
import { default as styles } from './SBadge.module.scss'

const Badge = ({
    children,
    className,
    variant = 'Design',
    color = 'Design',
    size = 'Design',
    startIcon,
    endIcon,
    ...rest
}: IBadgeProps) => {
    return (
        <span
            data-variant={variant}
            data-color={color}
            data-size={size}
            className={cn(styles.root, className)}
            {...rest}
        >
            {startIcon && <span className='badge-start-icon'>{startIcon}</span>}
            {children && <span className='badge-content'></span>}
            {endIcon && <span className='badge-end-icon'>{endIcon}</span>}
        </span>
    )
}

export default Badge
