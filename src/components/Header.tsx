import { createStyles, Menu, Header, Container, Group, Button, Burger, Anchor, Text, Title, useMantineTheme, Transition, Paper } from '@mantine/core';
import { useBooleanToggle, useScrollLock } from '@mantine/hooks';
import { Link } from "react-router-dom";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";

const HEADER_HEIGHT = 60;
const useStyles = createStyles((theme) => ({
  header: {
    // marginTop: 20,
    // backgroundColor: '#383F51',
  },

  inner: {
    backgroundColor: '#fff8e7',
    borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },

  right: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  title: {
    opacity: 0,
    transform: 'translateY(10px)',
    transition: 'transform 0.3s, opacity 0.3s ',
    [theme.fn.smallerThan('xs')]: {
      opacity: 1,
      transform: 'translateY(0)',
    }
  },

  left: {
    marginLeft: '15px',
    [theme.fn.smallerThan('xs')]: {
      width: '100%',
      div: {
        position: 'absolute',
        marginTop: '-1px',
      },
      a: {
        margin: 'auto',
      }
    },
  },

  menuBody: {
    width: '100vw',
    height: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff8e7',
  },

  menuItem: {
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
    fontWeight: 600,

    '&:hover': {
      color: "white",
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontSize: theme.fontSizes.md,
    fontWeight: 600,
    transition: '0.3s',

    '&:hover': {
      color: "white",
    },
  },


  linkLabel: {
    marginRight: 5,
  },
}));

export default function AppHeader() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [scrollLocked, setScrollLocked] = useScrollLock();
  const [opened, toggleOpened] = useBooleanToggle(false); // Think this is outdated, replace with useToggle from Mantine or useState from react
  const smallScreen = useMediaQuery('(min-width: 768px)');
  const [scroll] = useWindowScroll();

  return (
    <Header height={HEADER_HEIGHT} className={classes.header} fixed>
      <Paper className={classes.inner} shadow="md">
        <Group className={classes.left} spacing={theme.spacing.xs} >
          <Menu opened={opened} placement="center" gutter={15} classNames={{ body: classes.menuBody, item: classes.menuItem }} transition="slide-right" transitionDuration={200} transitionTimingFunction="ease" control={
            <Burger
              opened={opened}
              onClick={() => { toggleOpened(), setScrollLocked((s) => !s) }}
              className={classes.burger}
              size="sm"
            />
          }>
            <Menu.Item component="a" href="/Aditya Agrawal Resume.pdf" target="_blank" onClick={() => { toggleOpened(), setScrollLocked((s) => !s) }} sx={{ color: "#ff6b6c", '&:hover': { backgroundColor: "#ff6b6c" } }}> Resume </Menu.Item>
            <Menu.Item component="a" href="https://github.com/DaSniper12" target="_blank" onClick={() => { toggleOpened(), setScrollLocked((s) => !s) }} sx={{ color: "#6AB481", '&:hover': { backgroundColor: "#6AB481" } }}> GitHub </Menu.Item>
            <Menu.Item component="a" href="https://www.linkedin.com/in/aditya-agrawal-4bb96117b/" target="_blank" onClick={() => { toggleOpened(), setScrollLocked((s) => !s) }} sx={{ color: "#48ABD5", '&:hover': { backgroundColor: "#48ABD5" } }}> LinkedIn </Menu.Item>
          </Menu>
          <Anchor component={Link} to="/" sx={{ color: 'black' }} underline={false}>
            <Title className={classes.title} sx={{
              opacity: scroll.y > 100 ? 1 : 0,
              transform: scroll.y > 100 ? 'translateY(0)' : '',
            }}>Aditya Agrawal</Title>
          </Anchor>
        </Group>

        <Group spacing={5} className={classes.right} position="center">
          <Button href="/Aditya Agrawal Resume.pdf" target="_blank" className={classes.link} variant="subtle" sx={{ color: "#ff6b6c", '&:hover': { backgroundColor: "#ff6b6c" } }} component="a"> Resume </Button>
          <Button href="https://github.com/DaSniper12/" target="_blank" className={classes.link} variant="subtle" sx={{ color: "#6AB481", '&:hover': { backgroundColor: "#6AB481" } }} component="a"> GitHub </Button>
          <Button href="https://www.linkedin.com/in/aditya-agrawal-4bb96117b/" target="_blank" className={classes.link} variant="subtle" sx={{ color: "#48ABD5", '&:hover': { backgroundColor: "#48ABD5" } }} component="a"> LinkedIn </Button>
        </Group>
      </Paper>
    </Header>
  );
}