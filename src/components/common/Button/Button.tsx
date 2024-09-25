import { type ElementType } from 'react'
import { cn } from '@cms/helpers'

import { default as styles } from './Button.module.scss'
import type { IButtonProps } from './Button.types'
import { LoadingSpinner } from './LoadingSpinner'

const Button = <T extends ElementType = 'button'>({
    children,
    variant = 'FilledPrimary',
    component,
    size = 'lg',
    disabled,
    className,
    isLoading,
    spinnerProps,
    startIcon,
    endIcon,
    rotateIcons = false,
    ...rest
}: IButtonProps<T>) => {
    const ComponentToRender = component || 'button'

    return (
        <ComponentToRender
            data-size={size}
            data-variant={variant}
            data-rotate-icons={rotateIcons}
            data-loading={isLoading}
            disabled={disabled || isLoading}
            className={cn('button-root', styles.root, className)}
            {...rest}
        >
            {startIcon && <div className='start-icon'>{startIcon}</div>}
            {children && <span>{children}</span>}
            {isLoading && <LoadingSpinner variant={variant} size={size} {...spinnerProps} />}
            {endIcon && <span className='end-icon'>{endIcon}</span>}
        </ComponentToRender>
    )
}

export default Button
