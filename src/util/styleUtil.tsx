import {
  createStyles,
  Stack,
  styled,
  ThemeProvider,
  Typography,
} from '@mui/material';

export const getMuiTheme = () =>
  createStyles({
    components: {
      MUIDataTableToolbar: {
        styleOverrides: {
          root: {
            padding: '1rem !important',
          },
          titleText: {
            fontSize: '18px',
            fontWeight: '600',
          },
        },
      },
    },
  });

export const TableTheme = ({ children }) => {
  return <ThemeProvider theme={getMuiTheme()}>{children}</ThemeProvider>;
};

export const capitalize = (string) => {
  return string ? string?.replace(/\b\w/g, (l) => l.toUpperCase()) : string;
};

export const StackWrapper = styled(Stack)(
  ({ theme }) => `
       display: grid;
       grid-template-columns: repeat(2,1fr);
       gap: 20px 25px;

        ${theme.breakpoints.down('md')} {
      grid-template-columns: repeat(1, 1fr);
    }
       
`
);

export const Para = styled(Typography)(
  ({ theme }) => `
     color: ${theme.colors.primary.main};
     margin: 0rem 0rem 1rem 0rem  
`
);
export const TableHeading = styled(Typography)(
  ({ theme }) => `
     color: ${theme.colors.alpha.black[100]};
     margin: 0rem 0rem 1rem 0rem  
`
);
