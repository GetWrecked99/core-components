import { forwardRef } from 'react'

import { cn } from '@core/utils/common/cn'

import { default as RADIO_SYMBOL } from './Radio.symbols'
import { type default as IRadioProps } from './Radio.types'

/**
 * @author: GetWrecked
 * @desc: Make sure to add declared symbol to all of your radio components in each application. as well as Id prop for accessing to labels htmlFor
 */
const Radio = forwardRef<HTMLInputElement, IRadioProps>(
    ({ size = 'lg', label, description, classNames, id, disabled, ...rest }, ref) => {
        return (
            <div data-size={size} data-disabled={disabled} className={cn(classNames?.root)}>
                <div className={cn('radio-input-wrapper', classNames?.radioInputWrapper)}>
                    <input
                        id={id}
                        className={cn('radio-input', classNames?.radioInput)}
                        type='radio'
                        ref={ref}
                        disabled={disabled}
                        {...rest}
                    />
                </div>
                <div className={cn('radio-title', classNames?.contentWrapperClass)}>
                    <label className={cn('radio-label', classNames?.label)} htmlFor={id}>
                        {label}
                    </label>
                    {description && (
                        <div className={cn('radio-description', classNames?.description)}>{description}</div>
                    )}
                </div>
            </div>
        )
    }
)

// Extend the type of Radio to include the RADIO_SYMBOL
;(Radio as typeof Radio & { [RADIO_SYMBOL]?: true })[RADIO_SYMBOL] = true

Radio.displayName = 'Radio'

export default Radio
