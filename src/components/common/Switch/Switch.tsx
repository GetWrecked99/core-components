import { forwardRef } from 'react'

import { cn } from '@core/utils/common/cn'

import { default as styles } from './SSwitch.module.scss'
import { type default as ISwitchProps } from './Switch.types'

const Switch = forwardRef<HTMLInputElement, ISwitchProps>(
    (
        { size = 'lg', startLabel, endLabel, startDescription, endDescription, classNames, id, disabled, ...rest },
        ref
    ) => {
        return (
            <div data-size={size} data-disabled={disabled} className={cn(styles.root, classNames?.root)}>
                {/* Start Content Wrapper */}
                <div className={cn('switch-content-wrapper', classNames?.startContentWrapper)}>
                    {/* Start Label */}
                    <label className={cn('switch-label', classNames?.startLabel)} htmlFor={id}>
                        {startLabel}
                    </label>
                    {/* Start Description */}
                    {startDescription && (
                        <div className={cn('switch-description', classNames?.startDescription)}>{startDescription}</div>
                    )}
                </div>
                {/* Input Element */}
                <input
                    id={id}
                    className={cn('switch-input', classNames?.switchInput)}
                    type='checkbox'
                    ref={ref}
                    disabled={disabled}
                    {...rest}
                />
                {/* End Content Wrapper */}
                <div className={cn('switch-content-wrapper', classNames?.endContentWrapper)}>
                    {/* End Label */}
                    <label className={cn('switch-label', classNames?.endLabel)} htmlFor={id}>
                        {endLabel}
                    </label>
                    {/* End Description */}
                    {endDescription && (
                        <div className={cn('switch-description', classNames?.endDescription)}>{endDescription}</div>
                    )}
                </div>
            </div>
        )
    }
)

Switch.displayName = 'Switch'

export default Switch
