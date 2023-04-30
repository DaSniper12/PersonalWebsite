import { createStyles, Anchor, Group, Text, Footer, useMantineTheme } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xs,
    backgroundColor: '#fff8e7',
    borderTop: `0px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      // paddingBottom: theme.spacing.lg * 2
    },
    textAlign: 'center',
  },
  right: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs
    }
  }
}));

export default function AppFooter() {
  const { classes } = useStyles();

  return (
    <Footer height="auto" className={classes.footer}>
      <div className={classes.inner}>
        <Text>Feel free to reach out and have a chat with me at <Anchor href='mailto: Z'>adityaagr@utexas.edu</Anchor></Text>
        <Text color="dimmed" className={classes.right}>Made with ❤ using <Anchor href="https://mantine.dev/">Mantine</Anchor>, <Anchor href="https://reactjs.org/">React</Anchor>, and <Anchor href="https://vitejs.dev/">Vite</Anchor></Text>
      </div>
    </Footer>
  );
}