import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme) => {
  return {
    Layout: {
      maxWidth: '400px',
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      [theme.breakpoints.down('md')]: {
        padding: '80px 10px 20px',
        display: 'flex',
        margin: 'auto',
      },
    },
  };
});
export default styles;
