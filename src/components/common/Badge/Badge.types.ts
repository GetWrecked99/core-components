import { type ReactNode } from 'react'

import { type IDivElementProps } from '@core/types/html'

type TBadgeVariantsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TBadgeColorsType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

type TBadgeSizesType = 'Set' | 'From' | 'Your' | 'Design' | 'System'

interface IBadgeProps extends IDivElementProps {
    startIcon?: ReactNode
    endIcon?: ReactNode
    size?: TBadgeSizesType
    variant?: TBadgeVariantsType
    color?: TBadgeColorsType
}

export default IBadgeProps
