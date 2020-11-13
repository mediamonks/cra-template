import React, { forwardRef, PropsWithChildren, Ref } from 'react';

import { StyledHeading, StyledHeadingProps } from './Heading.styles';

export type HeadingProps = StyledHeadingProps & {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  forwardedAs?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  /* eslint-enable  */
};

function Heading(
  { type, as, ...props }: PropsWithChildren<HeadingProps>,
  ref: Ref<HTMLHeadingElement>,
) {
  return <StyledHeading ref={ref} type={type} as={as || type} {...props} />;
}

// typings for `forwardRef` seem to be messed up, so have to pass the element and props types again
export default forwardRef<HTMLHeadingElement, PropsWithChildren<HeadingProps>>(Heading);
