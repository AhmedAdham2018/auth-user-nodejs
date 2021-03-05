import Typography from '@material-ui/core/Typography';


export default function Footer() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © Ahmed Adham'}
        {new Date().getFullYear()}
      </Typography>
    );
}