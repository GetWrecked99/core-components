import { default as Link } from 'next/link'

import type { default as INextLinkProps } from './Link.types'

const NextLink = ({ children, prefetch = false, ...rest }: INextLinkProps) => {
    return (
        <Link prefetch={prefetch} {...rest}>
            {children}
        </Link>
    )
}

export default NextLink
