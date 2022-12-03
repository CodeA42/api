import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles(() => {
  return {
    root: {
      '& .MuiFormControl-root': {
        padding: 0,
        margin: 0,
      },
    },
  };
});
export default styles;
