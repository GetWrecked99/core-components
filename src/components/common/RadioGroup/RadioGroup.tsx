import { forwardRef } from 'react'

import { cn } from '@core/utils/common/cn'

import { default as styles } from './RadioGroup.module.scss'
import { type default as IRadioGroupProps } from './RadioGroup.types'
import { default as processChildren } from './RadioGroup.utils'

const RadioGroup = forwardRef<HTMLDivElement, IRadioGroupProps>(
    ({ value, onChange, children, classNames, title, description, orientation = 'horizontal', withAsterisk }, ref) => {
        return (
            <div data-orientation={orientation} className={cn(styles.root, classNames?.root)} {...ref}>
                {/* Heading Section */}
                <div className={cn('radio-group-heading-wrapper', classNames?.headingWrapper)}>
                    {/* Title & Asterisk */}
                    <div className={cn('radio-group-title-wrapper', classNames?.titleWrapper)}>
                        <span className={cn('radio-group-title', classNames?.title)}>{title}</span>
                        {withAsterisk && <span className={cn('radio-group-asterisk', classNames?.asterisk)}>*</span>}
                    </div>
                    {/* Description */}
                    {description && (
                        <div className={cn('radio-group-description', classNames?.description)}>{description}</div>
                    )}
                </div>
                {/* Children Section */}
                <div className={cn('radio-group-body-wrapper', classNames?.bodyWrapper)}>
                    {processChildren({ children, onChange, value })}
                </div>
            </div>
        )
    }
)

RadioGroup.displayName = 'RadioGroup'

export default RadioGroup
