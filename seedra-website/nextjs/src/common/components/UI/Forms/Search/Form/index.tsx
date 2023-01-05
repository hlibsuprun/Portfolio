import React, { ChangeEvent, FC, ForwardedRef, forwardRef, memo } from 'react';

import { Form as FormStyled, Button, Input } from './Form.styled';

import { Icon } from '@components/UI/Icon';

interface Props {
  onFocus: () => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  ref: ForwardedRef<HTMLFormElement>;
}

export const Form: FC<Props> = memo(
  forwardRef<HTMLFormElement, Props>(({ onFocus, onChange, value }, ref) => {
    return (
      <FormStyled ref={ref} onFocus={onFocus}>
        <Input
          type="text"
          placeholder="Search"
          onChange={onChange}
          value={value}
        />
        <Button type="submit">
          <Icon iconName="search" />
        </Button>
      </FormStyled>
    );
  })
);

Form.displayName = 'Form';
