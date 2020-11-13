/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { FC } from 'react';

export interface LabelProps {
  htmlFor: string;
}

const Label: FC<LabelProps> = (props) => {
  return <label {...props} />;
};

export default Label;
