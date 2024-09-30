import { type ReactNode } from 'react'

import { type IInputElementProps } from '@core/types/html'

type TSwitchColorsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TSwitchSizesType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

interface ISwitchProps extends Omit<IInputElementProps, 'type' | 'size' | 'children' | 'className' | 'value'> {
    /** Make sure to insert string in most use cases */
    startLabel: ReactNode
    /** Make sure to insert string in most use cases */
    startDescription?: ReactNode
    /** Make sure to insert string in most use cases */
    endLabel?: ReactNode
    /** Make sure to insert string in most use cases */
    endDescription?: ReactNode
    color?: TSwitchColorsType
    size?: TSwitchSizesType
    classNames?: {
        root?: string
        startContentWrapper?: string
        startLabel?: string
        startDescription?: string
        switchInput?: string
        endContentWrapper?: string
        endLabel?: string
        endDescription?: string
    }
    value?: string
}

export default ISwitchProps
