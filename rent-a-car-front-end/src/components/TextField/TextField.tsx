import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { FC } from 'react';
import styles from './textFieldStyles';

type TextFieldExtensionProps = {
  pressEnter?: () => void;
  autoHeight?: boolean;
};

const TextField = (props: TextFieldProps & TextFieldExtensionProps) => {
  const { pressEnter, autoHeight, ...rest } = props;
  const classes = styles();
  const defaultHeight = autoHeight ? classes.root : '';
  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      pressEnter && pressEnter();
    }
    if (rest.type === 'number' && event.key === 'e') {
      event.preventDefault();
    }
  };
  return <MuiTextField fullWidth={true} onKeyDown={handleEnter} {...rest} />;
};
export default TextField;
