import { type IDivElementProps } from '@/app/core/types/html'

import type { TButtonSizesType, TButtonVariantsType } from '../Button.types'

interface ILoadingSpinnerProps extends Omit<IDivElementProps, 'className'> {
    variant: TButtonVariantsType
    size: TButtonSizesType
    classNames?: {
        root?: string
        svg?: string
    }
}

export default ILoadingSpinnerProps
