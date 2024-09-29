import { forwardRef } from 'react'

import { cn } from '@core/utils/common/cn'

import { default as styles } from './CheckboxGroup.module.scss'
import { type default as ICheckboxGroupProps } from './CheckboxGroup.types'
import { default as processChildren } from './CheckboxGroup.utils'

const CheckboxGroup = forwardRef<HTMLDivElement, ICheckboxGroupProps>(
    ({ value, onChange, children, classNames, title, description, orientation = 'horizontal', withAsterisk }, ref) => {
        return (
            <div
                data-orientation={orientation}
                className={cn('checkbox-group-root', styles.root, classNames?.root)}
                {...ref}
            >
                {/* Heading Section */}
                <div className={cn('checkbox-group-heading-wrapper', classNames?.headingWrapper)}>
                    {/* Title & Asterisk */}
                    <div className={cn('checkbox-group-title-wrapper', classNames?.titleWrapper)}>
                        <span className={cn('checkbox-group-title', classNames?.title)}>{title}</span>
                        {withAsterisk && <span className={cn('checkbox-group-asterisk', classNames?.asterisk)}>*</span>}
                    </div>
                    {/* Description */}
                    {description && (
                        <div className={cn('checkbox-group-description', classNames?.description)}>{description}</div>
                    )}
                </div>
                {/* Children Section */}
                <div className={cn('checkbox-group-body-wrapper', classNames?.bodyWrapper)}>
                    {processChildren({ children, onChange, value })}
                </div>
            </div>
        )
    }
)

CheckboxGroup.displayName = 'CheckboxGroup'

export default CheckboxGroup
