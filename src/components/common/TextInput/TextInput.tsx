'use client'

import { type ChangeEvent, forwardRef, type MouseEvent, useState } from 'react'

import { CloseIcon } from '@components/icons'

import { cn } from '@core/utils/common/cn'

import { default as styles } from './TextInput.module.scss'
import type { default as ITextInputProps } from './TextInput.types'

const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
    (
        {
            value,
            onChange,
            onClear,
            classNames,
            id,
            withAsterisk,
            label,
            startIcon,
            endIcon,
            clearIcon = <CloseIcon />,
            isClearable = false,
            size = 'Design',
            disabled,
            placeholder = 'Enter your text',
            ...rest
        },
        ref
    ) => {
        const [inputValue, setInputValue] = useState<string>(value ?? '')

        const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e.target.value)
            else setInputValue(e.target.value)
        }

        const onInputValueClear = (e: MouseEvent<HTMLSpanElement>) => {
            e.stopPropagation()

            if (onClear) onClear()
            if (onChange) onChange('')
            else setInputValue('')
        }

        return (
            <div className={cn('text-input-root', styles.root, classNames?.root)}>
                {/* Label & Asterisk */}
                {label && (
                    <div className={cn('text-input-label-wrapper', classNames?.labelWrapper)}>
                        <label className={cn('text-input-label', classNames?.label)} htmlFor={id}>
                            {label}
                        </label>
                        {withAsterisk && <span className={cn('text-input-asterisk', classNames?.asterisk)}>*</span>}
                    </div>
                )}
                {/* Input Wrapper */}
                <div
                    data-size={size}
                    data-disabled={disabled}
                    className={cn('text-input-wrapper', classNames?.inputWrapper)}
                >
                    {/* Input Start Section */}
                    {startIcon && (
                        <div className={cn('text-input-start-section-wrapper', classNames?.inputStartSectionWrapper)}>
                            <span className={cn('text-input-start-icon-wrapper', classNames?.inputStartIconWrapper)}>
                                {startIcon}
                            </span>
                        </div>
                    )}

                    {(isClearable || endIcon) && (
                        // Input End Section Wrapper
                        <div
                            data-icons-count={Number(isClearable && !disabled) + Number(!!endIcon)}
                            className={cn('text-input-end-section-wrapper', classNames?.inputEndSectionWrapper)}
                        >
                            {/* Input Clear Icon Wrapper */}
                            {isClearable && (value || inputValue) && !disabled && (
                                <span
                                    className={cn('text-input-clear-icon-wrapper', classNames?.inputClearIconWrapper)}
                                    onClick={onInputValueClear}
                                >
                                    {clearIcon}
                                </span>
                            )}
                            {/* Input End Icon Wrapper */}
                            {endIcon && (
                                <span className={cn('text-input-end-icon-wrapper', classNames?.inputEndIconWrapper)}>
                                    {endIcon}
                                </span>
                            )}
                        </div>
                    )}
                    {/* Input Element */}
                    <input
                        value={value ?? inputValue}
                        onChange={onInputValueChange}
                        className={cn('text-input', classNames?.input)}
                        type='text'
                        disabled={disabled}
                        placeholder={placeholder}
                        autoComplete='off'
                        id={id}
                        {...rest}
                        ref={ref}
                    />
                </div>
            </div>
        )
    }
)

TextInput.displayName = 'TextInput'

export default TextInput
