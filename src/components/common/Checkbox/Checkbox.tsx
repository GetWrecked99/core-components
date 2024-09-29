import { forwardRef } from 'react'

import { cn } from '@core/utils/common/cn'

import { default as styles } from './Button.module.scss'
import { default as CHECKBOX_SYMBOL } from './Checkbox.symbols'
import { type default as ICheckboxProps } from './Checkbox.types'

/**
 * @author: GetWrecked
 * @desc: Make sure to add declared symbol to all of your checkbox components in each application. as well as Id prop for accessing to labels htmlFor
 */
const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
    ({ variant = 'Design', label, description, classNames, id, disabled, size = 'Design', ...rest }, ref) => {
        return (
            <div
                data-size={size}
                data-variant={variant}
                data-disabled={disabled}
                className={cn(styles.root, classNames?.root)}
            >
                <div className={cn('checkbox-input-wrapper', classNames?.checkboxInputWrapper)}>
                    <input
                        id={id}
                        className={cn('checkbox-input', classNames?.checkboxInput)}
                        type='checkbox'
                        ref={ref}
                        disabled={disabled}
                        {...rest}
                    />
                </div>
                {(label || description) && (
                    <div className={cn('checkbox-content-wrapper', classNames?.contentWrapperClass)}>
                        <label className={cn('checkbox-label', classNames?.label)} htmlFor={id}>
                            {label}
                        </label>
                        {description && (
                            <div className={cn('checkbox-description', classNames?.description)}>{description}</div>
                        )}
                    </div>
                )}
            </div>
        )
    }
)

// Extend the type of Checkbox to include the CHECKBOX_SYMBOL
;(Checkbox as typeof Checkbox & { [CHECKBOX_SYMBOL]?: true })[CHECKBOX_SYMBOL] = true

Checkbox.displayName = 'Checkbox'

export default Checkbox
