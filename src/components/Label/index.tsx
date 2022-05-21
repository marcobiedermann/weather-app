/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
}

function Label(props: LabelProps): JSX.Element {
  return <label {...props} />;
}

export type { LabelProps };
export default Label;
