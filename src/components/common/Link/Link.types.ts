import { type LinkProps } from 'next/link'

import { type IAnchorElementProps } from '@core/types/html'

interface INextLinkProps
    extends Omit<IAnchorElementProps, keyof LinkProps>,
        LinkProps,
        React.RefAttributes<HTMLAnchorElement> {}

export default INextLinkProps
