'use client'

import { type ChangeEvent, forwardRef, useState } from 'react'

import { CloseIcon, VisibilityIcon, VisibilityOffIcon } from '@components/icons'

import { cn } from '@core/utils/common/cn'

import { default as styles } from './PasswordInput.module.scss'
import type { default as IPasswordInputProps } from './PasswordInput.types'

const PasswordInput = forwardRef<HTMLInputElement, IPasswordInputProps>(
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
            eyeIcons,
            clearIcon = <CloseIcon />,
            isClearable = false,
            size = 'Design',
            disabled,
            placeholder = 'Enter your password',
            ...rest
        },
        ref
    ) => {
        const [inputValue, setInputValue] = useState<string>(value ?? '')
        const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false)

        const onInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e.target.value)
            else setInputValue(e.target.value)
        }

        const onInputValueClear = () => {
            if (onChange) onChange('')
            else setInputValue('')

            if (onClear) onClear()
        }

        const togglePasswordVisibility = () => {
            setIsPasswordVisible((curr) => !curr)
        }

        const visibleEyeIcon = eyeIcons?.visible ?? <VisibilityIcon />
        const invisibleEyeIcon = eyeIcons?.invisible ?? <VisibilityOffIcon />

        return (
            <div className={cn(styles.root, classNames?.root)}>
                {/* Label & Asterisk */}
                {label && (
                    <div className={cn('password-input-label-wrapper', classNames?.labelWrapper)}>
                        <label className={cn('password-input-label', classNames?.label)} htmlFor={id}>
                            {label}
                        </label>
                        {withAsterisk && <span className={cn('password-input-asterisk', classNames?.asterisk)}>*</span>}
                    </div>
                )}
                {/* Input Wrapper */}
                <div
                    data-size={size}
                    data-disabled={disabled}
                    className={cn('password-input-wrapper', classNames?.inputWrapper)}
                >
                    {/* Input Start Section */}
                    {startIcon && (
                        <div
                            className={cn('password-input-start-section-wrapper', classNames?.inputStartSectionWrapper)}
                        >
                            <span
                                className={cn('password-input-start-icon-wrapper', classNames?.inputStartIconWrapper)}
                            >
                                {startIcon}
                            </span>
                        </div>
                    )}
                    {/* Input End Section Wrapper */}
                    <div
                        // We always have eye icon, so we are multiplying it by 1
                        data-icons-count={Number(isClearable && !disabled) + 1}
                        className={cn('password-input-end-section-wrapper', classNames?.inputEndSectionWrapper)}
                    >
                        {/* Input Clear Icon Wrapper */}
                        {isClearable && (value || inputValue) && !disabled && (
                            <span
                                className={cn('password-input-clear-icon-wrapper', classNames?.inputClearIconWrapper)}
                                onClick={onInputValueClear}
                            >
                                {clearIcon}
                            </span>
                        )}
                        {/* Input End Icon Wrapper */}
                        <span
                            className={cn('password-input-end-icon-wrapper', classNames?.inputEndIconWrapper)}
                            onClick={togglePasswordVisibility}
                        >
                            {isPasswordVisible ? invisibleEyeIcon : visibleEyeIcon}
                        </span>
                    </div>
                    {/* Input Element */}
                    <input
                        value={value ?? inputValue}
                        onChange={onInputValueChange}
                        className={cn('password-input', classNames?.input)}
                        type={isPasswordVisible ? 'text' : 'password'}
                        disabled={disabled}
                        placeholder={placeholder}
                        autoComplete='new-password'
                        id={id}
                        {...rest}
                        ref={ref}
                    />
                </div>
            </div>
        )
    }
)

PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
