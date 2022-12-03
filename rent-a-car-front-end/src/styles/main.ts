// import { makeStyles } from '@material-ui/core/styles';
import colors from './colors';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    // const styles = makeStyles(() => ({
    root: {
      backgroundColor: colors.mainBackground,
      minHeight: '100vh',
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 24px',
    },
    globalPaddings: {
      padding: '0 24px',
    },
  }),
);
export default styles;
