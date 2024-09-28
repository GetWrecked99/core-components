import { type ElementType } from 'react'

import { cn } from '@core/utils/common/cn'

import { default as styles } from './Button.module.scss'
import type { IButtonProps } from './Button.types'
import { LoadingSpinner } from './LoadingSpinner'

const Button = <T extends ElementType = 'button'>({
    children,
    variant = 'Design',
    component,
    size = 'Design',
    color = 'Design',
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
            data-color={color}
            data-rotate-icons={rotateIcons}
            data-loading={isLoading}
            disabled={disabled || isLoading}
            className={cn(styles.root, className)}
            {...rest}
        >
            {startIcon && <div className='button-start-icon'>{startIcon}</div>}
            {children && <span className='button-content'>{children}</span>}
            {isLoading && <LoadingSpinner variant={variant} size={size} {...spinnerProps} />}
            {endIcon && <span className='button-end-icon'>{endIcon}</span>}
        </ComponentToRender>
    )
}

export default Button
