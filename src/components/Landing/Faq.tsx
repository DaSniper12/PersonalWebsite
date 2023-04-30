import { createStyles, Accordion, Grid, Col, Container, Title, ThemeIcon } from '@mantine/core';
import { TbPlus } from 'react-icons/tb';

const useStyles = createStyles((theme, _params, getRef) => {
  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top left',
      position: 'relative',
    },

    title: {
      color: theme.white,
      fontSize: 52,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    item: {
      marginTop: theme.spacing.xl,
      backgroundColor: theme.white,
      borderBottom: 0,
      borderRadius: theme.radius.md,
      boxShadow: theme.shadows.lg,
    },

    control: {
      fontSize: theme.fontSizes.lg,
      padding: `${theme.spacing.lg}px ${theme.spacing.xl}px`,
      color: theme.black,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    content: {
      paddingLeft: theme.spacing.xl,
      lineHeight: 1.6,
      color: theme.black,
    },

    icon: {
      ref: getRef('icon'),
      marginLeft: theme.spacing.md,
    },

    gradient: {
      backgroundImage: `radial-gradient(${theme.colors[theme.primaryColor][6]} 0%, ${theme.colors[theme.primaryColor][5]
        } 100%)`,
    },

    itemOpened: {
      [`& .${getRef('icon')}`]: {
        transform: 'rotate(45deg) !important',
      },
    },

    button: {
      display: 'block',
      marginTop: theme.spacing.md,

      '@media (max-width: 755px)': {
        display: 'block',
        width: '100%',
      },
    },
  };
});

  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.';


export default function FaqWithImage() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size="lg" my="xl" py="xl">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12}>
            <Title align="center" className={classes.title}>
              My Expensify Application
            </Title>
          </Col>
          <Col span={12}>
            <Accordion
              iconPosition="right"
              initialItem={-1}
              multiple
              classNames={{
                item: classes.item,
                itemOpened: classes.itemOpened,
                control: classes.control,
                icon: classes.icon,
                contentInner: classes.content,
              }}
              icon={
                <ThemeIcon radius="xl" className={classes.gradient} size={32}>
                  <TbPlus size={18} />
                </ThemeIcon>
              }
            >
              <Accordion.Item label="What is my expected graduation date?">
                May 2025
              </Accordion.Item>
              <Accordion.Item label="Can you commit to a 6 month full-time internship">
                Yes
              </Accordion.Item>
              <Accordion.Item label="What is the URL of your webiste? If you don't have one, why not">
                My website, <a href="https://aditya-agrawal.me">aditya-agrawal.me</a>, showcases some of my web development skills. I've added a fun touch by using the Blur-Hash library, which creates a blurry placeholder for images as they load, making the user experience smoother and the page load faster. I love finding neat little creative solutions like this to enhance the overall user experience.
              </Accordion.Item>
              <Accordion.Item label="What's your coding history? When did you start, and what have you done between then and now?">
                <p>
                  I have been interested in coding and building websites since 7th grade. Since then, I have developed my skills over the years by working on a variety of projects, both as an individual contributor and by developing alongside a team. My most notable project is Merge, a web app I worked on as part of Freetail Hackers, a student-led hackathon organizing club at UT Austin. The app's Tinder-style UI allows hackers to easily find and connect with teammates during the hackathon. With real-time chat functionality, they can collaborate and ideate throughout the hackathon. The app utilizes the MERN stack along with Socket.IO to power the real-time chat. As project lead, I led a team of 5 to design, develop and scale the app, by implementing an agile development system, resolving any major bugs, teaching the team the various components of web development, and increasing the velocity of the team by creating a CI/CD pipeline for integration testing and deployment on AWS. The impact Merge can have is tremendous, as more than 20% of hackers at our previous 600+ hackathon needed help with finding a teammate. Additionally, we plan to open-source the app so that hackathon organizing clubs across the nation can use it to greatly improve their team matching experience. During my time as an intern at Atmosphere, I also helped migrate the customer portal from Vue 2 to Vue 3 – to increase the responsiveness and speed of the portal; implemented the collection of user analytics through HotJar, BigQuery, and an in-house analytics API; and created a custom component library – which is being used by numerous other teams within the company. I have a lot of experience with JavaScript, Java, SQL, C, Kotlin, PHP, and am currently learning Python and C++.
                </p>
                <p>
                  In terms of full-stack experience, I have worked on building and deploying scalable web applications and have a good understanding of both the front-end and back-end technologies involved. I am eager to bring and grow my skills and passion for coding as a Full Stack Intern at Expensify.
                </p>
              </Accordion.Item>
              <Accordion.Item label="What do you want to do with the rest of your life, and how is Expensify a step towards your long-term gaols?">
                <p>
                  I have a big goal of helping the people around me, and I believe that building a successful startup is the most effective way of achieving this. To that end, I've already taken steps towards this goal by working on various projects and serving as the Vice-President of Freetail Hackers. Serving as VP has taught me a lot about leadership and my ever-increasing desire to continue lead. Additionally, by approaching the role from an entrepreneurial perspective I’ve learned about the best way to organize a team, how to recruit the best candidates, and most importantly how to prioritize and focus on what’s important.
                </p>
                <p>
                  Working at Expensify would be a major boon for me because of the wealth of knowledge of its employees and  the supportive culture. I see this opportunity as a step towards my long-term goal, due to vast knowledge I can gain and the support of my colleagues encouraging me to take the risks with my startup.
                </p>
                <p>
                  While I don’t know yet what industry my startup will be in, I do know that the impact will be tremendous and interning at Expensify will be the most important stop on along this journey.
                </p>
                <p>
                  Additionally, I have set a personal goal for myself to become proficient in reading and writing Hindi by the end of the year, and I believe that being part of the diverse and supportive community at Expensify will only help me achieve this goal.
                </p>
              </Accordion.Item>
              <Accordion.Item label="How did you hear about us? A job posting? Chalk on the sidewalk? From a friend? Let us know where you saw this opening.">
                LinkedIn
              </Accordion.Item>
            </Accordion>
          </Col>
        </Grid>
      </Container>
    </div>
  );
}