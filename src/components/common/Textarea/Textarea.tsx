'use client'

import { type ChangeEvent, forwardRef, useState } from 'react'

import { cn } from '@core/utils/common/cn'

import { default as styles } from './Textarea.module.scss'
import type { default as ITextareaProps } from './Textarea.types'

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(
    (
        {
            value,
            onChange,
            onClear,
            classNames,
            id,
            withAsterisk,
            label,
            disabled,
            placeholder = 'Enter Your Message Here...',
            resize = 'none',
            rows = 3,
            ...rest
        },
        ref
    ) => {
        const [textareaValue, setTextareaValue] = useState<string>(value ?? '')

        const onTextareaValueChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
            if (onChange) onChange(e.target.value)
            else setTextareaValue(e.target.value)
        }

        const onTextareaClear = () => {
            if (onChange) onChange('')
            if (onClear) onClear()
        }

        console.log(onTextareaClear)

        return (
            <div className={cn(styles.root, classNames?.root)}>
                {/* Label & Asterisk */}
                {label && (
                    <div className={cn('textarea-label-wrapper', classNames?.labelWrapper)}>
                        <label className={cn('textarea-label', classNames?.label)} htmlFor={id}>
                            {label}
                        </label>
                        {withAsterisk && <span className={cn('textarea-asterisk', classNames?.asterisk)}>*</span>}
                    </div>
                )}
                {/* Textarea Wrapper */}
                <div data-disabled={disabled} className={cn('textarea-wrapper', classNames?.textareaWrapper)}>
                    {/* Textarea Element */}
                    <textarea
                        data-resize={resize}
                        value={value ?? textareaValue}
                        onChange={onTextareaValueChange}
                        className={cn('textarea', classNames?.textarea)}
                        disabled={disabled}
                        placeholder={placeholder}
                        rows={rows}
                        id={id}
                        {...rest}
                        ref={ref}
                    />
                </div>
            </div>
        )
    }
)

Textarea.displayName = 'Textarea'

export default Textarea
