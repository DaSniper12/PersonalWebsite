import { createStyles, Image, Container, Title, Button, Group, Text, List, ThemeIcon, Mark, useMantineTheme, Box } from '@mantine/core';
import { TbCheck } from 'react-icons/tb';
import image from '/portrait.jpeg';
import { Blurhash } from 'react-blurhash';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    // paddingBottom: theme.spacing.xl * 4,
    flexDirection: 'row-reverse',
    [theme.fn.smallerThan('xs')]: {
      // paddingBottom: theme.spacing.xl * 2,
      flexDirection: 'column',
    },
  },

  content: {
    maxWidth: 550,
    marginRight: theme.spacing.xl * 3,
    color: "white",

    [theme.fn.smallerThan('sm')]: {
      maxWidth: 360,
      marginRight: theme.spacing.sm,
    },
    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: "white",
    // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  item: {
    color: "white",
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    margin: 'auto',
    maxWidth: '550px',
    maxHeight: '600px',

    [theme.fn.smallerThan('md')]: {
      paddingBottom: theme.spacing.lg,
    },
  },

  utAustin: {
    textDecoration: 'underline',
    textDecorationColor: '#bf5700',
    textDecorationThickness: '3px',
    display: 'inline',
  },
}));

export default function HeroBullets() {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <Image src={image} className={classes.image} placeholder={<Blurhash hash="UGFZAtI:E?ofQkNH.AV?9SM|Hst8.Joz?ZRP" height="100%" width="100%"/>} withPlaceholder radius="lg" />
          <div className={classes.content}>
            {
            <Title className={classes.title}>
              Hi, I'm Aditya Agrawal! 
            </Title>
            }
            <Text size="lg" color={theme.colors.gray[2]} mt="lg" inline sx={{lineHeight: 1.15}}>
              I’m a computer science student at the <span className={classes.utAustin}>University of Texas at Austin</span>, a builder at heart, and an entrepreneur in spirit.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="md"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <TbCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item className={classes.item}>
                I am expereinced with 
                <span className={classes.utAustin} style={{textDecorationColor: '#ff6b6c'}}> JavaScript,</span> <span className={classes.utAustin} style={{textDecorationColor: '#6AB481'}}>Java,</span> <span className={classes.utAustin} style={{textDecorationColor: '#48ABD5'}}>C,</span> <span className={classes.utAustin} style={{textDecorationColor: '#ff6b6c'}}>NodeJS,</span> <span className={classes.utAustin} style={{textDecorationColor: '#6AB481'}}>React,</span> <span className={classes.utAustin} style={{textDecorationColor: '#48ABD5'}}>Vue,</span> <span className={classes.utAustin} style={{textDecorationColor: '#ff6b6c'}}>Firebase,</span> <span className={classes.utAustin} style={{textDecorationColor: '#6AB481'}}>SCSS,</span> <span className={classes.utAustin} style={{textDecorationColor: '#48ABD5'}}>SQL,</span> and more.
              </List.Item>
              <List.Item className={classes.item}>
                In my free time I can be found playing Golf or Ultimate Frisbee, reading a book, or hosting and attending hackathons.
              </List.Item>
              <List.Item className={classes.item}>
                I grew up in Mumbai, Johannesburg, and Houston.
              </List.Item>
            </List>
            {
            // <Group mt={30}>
            //   <Button radius="xl" size="md" className={classes.control}>
            //     More about me
            //   </Button>
            // </Group>
              
            }
          </div>
        </div>
      </Container>
    </div>
  );
}