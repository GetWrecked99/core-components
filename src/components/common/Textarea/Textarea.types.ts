import { type ReactNode } from 'react'

import { type ITextareaElementProps } from '@core/types/html'

interface ITextareaProps extends Omit<ITextareaElementProps, 'type' | 'className' | 'value' | 'onChange' | 'size'> {
    withAsterisk?: boolean
    /** Make sure to not pass label element through. */
    label?: ReactNode
    value?: string
    onChange?: (value: string) => void
    onClear?: () => void
    resize?: 'vertical' | 'horizontal' | 'both' | 'none'
    classNames?: {
        root?: string
        labelWrapper?: string
        label?: string
        asterisk?: string
        textareaWrapper?: string
        textarea?: string
        extraRoot?: string
    }
}

export default ITextareaProps
