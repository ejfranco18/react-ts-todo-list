import { ChangeEvent } from 'react';

export interface TextAreaStyledProps {
  name: string;
  placeholder?: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
