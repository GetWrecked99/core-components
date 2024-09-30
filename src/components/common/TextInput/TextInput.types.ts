import { type ReactNode } from 'react'

import { type IInputElementProps } from '@core/types/html'

type TTextInputVariantsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TTextInputColorsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TTextInputSizesType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

interface ITextInputProps extends Omit<IInputElementProps, 'type' | 'className' | 'value' | 'onChange' | 'size'> {
    withAsterisk?: boolean
    /** Make sure to not pass label element through. */
    label?: ReactNode
    value?: string
    onChange?: (value: string) => void
    /** For optimal user interface design, please provide an icon with dimensions of 24 pixels in width and height. */
    startIcon?: ReactNode
    /** For optimal user interface design, please provide an icon with dimensions of 16 pixels in width and height. */
    endIcon?: ReactNode
    isClearable?: boolean
    onClear?: () => void
    /** For optimal user interface design, please provide an icon with dimensions of 16 pixels in width and height. */
    clearIcon?: ReactNode
    variant?: TTextInputVariantsType
    color?: TTextInputColorsType
    size?: TTextInputSizesType
    classNames?: {
        root?: string
        labelWrapper?: string
        label?: string
        asterisk?: string
        inputWrapper?: string
        inputStartSectionWrapper?: string
        inputStartIconWrapper?: string
        input?: string
        inputEndSectionWrapper?: string
        inputEndIconWrapper?: string
        inputClearIconWrapper?: string
    }
}

export default ITextInputProps
