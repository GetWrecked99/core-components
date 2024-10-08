import { type ReactNode } from 'react'

import { type IInputElementProps } from '@core/types/html'

type TPasswordInputVariantsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TPasswordInputColorsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TPasswordInputSizesType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

interface IPasswordInputProps extends Omit<IInputElementProps, 'type' | 'className' | 'value' | 'onChange' | 'size'> {
    withAsterisk?: boolean
    /** Make sure to not pass label element through. */
    label?: ReactNode
    value?: string
    onChange?: (value: string) => void
    /** For optimal user interface design, please provide an icon with dimensions of 24 pixels in width and height. */
    startIcon?: ReactNode
    /** For optimal user interface design, please provide an icon with dimensions of 16 pixels in width and height. */
    eyeIcons?: {
        visible: ReactNode
        invisible: ReactNode
    }
    isClearable?: boolean
    onClear?: () => void
    /** For optimal user interface design, please provide an icon with dimensions of 16 pixels in width and height. */
    clearIcon?: ReactNode
    variant?: TPasswordInputVariantsType
    color?: TPasswordInputColorsType
    size?: TPasswordInputSizesType
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

export default IPasswordInputProps
