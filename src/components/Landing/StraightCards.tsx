import { Card, Image, Text, Group, Badge, Button, createStyles, Box, useMantineTheme, SimpleGrid, Spoiler } from '@mantine/core';
import { Blurhash } from 'react-blurhash';
import Amtosphere from '/Atmosphere.jpeg';
import BreakthroughHouston from '/BreakthroughHouston.jpeg';
import FloodAlert from '/FloodAlert.jpeg';
import iEducateUSA from '/iEducateUSA.jpeg';
import LH4H from '/LH4H.jpeg';
import ORDRS from '/ORDRS.jpeg';
import Radix from '/Radix.jpeg';
import SpeeDelivery from '/SpeeDelivery.jpeg';
import UHP from '/UHP.jpeg';
import UpLyft from '/UpLyft.jpeg';
import WEARECHAIBOY from '/WEARECHAIBOY.jpeg';
import HackTX22 from '/HackTX22.jpeg';
import HackTheFuture from '/HackTheFuture.jpeg';
import Merge from '/Merge.jpeg';
import SpaceX from '/SpaceX.jpeg';
import HackTX23 from '/HackTX23.jpeg';

interface imageImportInterface {
  [index: string]: string,
}

const images: imageImportInterface = {
  "ATM": Amtosphere,
  "BTH": BreakthroughHouston,
  "FLA": FloodAlert,
  "IED": iEducateUSA,
  "LH4": LH4H,
  "ORD": ORDRS,
  "RAD": Radix,
  "SPD": SpeeDelivery,
  "UHP": UHP,
  "UPL": UpLyft,
  "CHI": WEARECHAIBOY,
  "HTX": HackTX22,
  "HTF": HackTheFuture,
  "MER": Merge,
  "SPX": SpaceX,
  "HCK": HackTX23,
}

const useStyles = createStyles((theme) => ({
  card: {
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    backgroundColor: theme.colors.gray[0],
  },

  section: {
    // borderBottom: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    // }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: 'uppercase',
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
  grid: {
    // display: '-webkit-box', /* Not needed if autoprefixing */
    // display: '-ms-flexbox', /* Not needed if autoprefixing */
    display: 'flex',
    marginLeft: '-16px',
  },
  gridColumns: {
    paddingLeft: '16px',
  },
  button: {
    // backgroundColor: '#6AB481',
    // border: "1px solid #6AB481",
    flex: 1,
    // color: 'white',
    fontWeight: 600,

    '&:hover': {
      // color: 'white',
      // backgroundColor: theme.fn.darken('#6AB481', 0.05),
    },
  }
}));

const breakpointColumnsObj = {
  default: 3,
  576: 1,
  768: 2,
  992: 3,
};

const colors = [
  "#48ABD5",
  "#ff6b6c",
  "#6AB481",
]

interface BadgeCardProps {
  data: {
    image: string,
    imageHash: string,
    badge: {
      label: string,
      color: string,
    },
    name: string,
    role: string,
    description: string,
    url: string,
    date: string,
    badges: {
      emoji: string;
      label: string;
    }[];
  }[];
}

export default function Cards(props: BadgeCardProps) {
  const { classes } = useStyles();
  const theme = useMantineTheme()
  let color = 0;
  // console.log(props)
  // console.log(props.data)
  const data = props.data;
  // console.log(data)

  const cards = data.map((item) => {
    color++;
    color %= 3
    return (
      <Card radius="md" p="sm" mb="md" className={classes.card} key={item.name} style={{ height: 'fit-content' }}>
        <Card.Section>
          <Image src={images[item.image]} alt={item.name} height={180} placeholder={<Blurhash hash={item.imageHash} height={180} width="100%" />} withPlaceholder />
        </Card.Section>

        <Card.Section className={classes.section} mt="md">
          <Group position="apart">
            <Box>
              <Text size="lg" weight={500}>
                {item.name}
              </Text>
              <Text color="dimmed">{item.role}</Text>
            </Box>
            <Badge size="sm" color={item.badge.color} >{item.badge.label}</Badge>
          </Group>
          <Text size="sm" mt="xs" >
            <Spoiler maxHeight={40} showLabel="Show more" hideLabel="Hide" styles={{ control: { fontSize: '14px' } }}>
              {item.description}
            </Spoiler>
          </Text>
          <Text size="xs" color="dimmed" mt="xs">
            {item.date}
          </Text>
          <Button mt="xs" component="a" href={item.url} target="_blank" rel="noopener noreferrer" radius="md" className={classes.button} fullWidth
            sx={{
              backgroundColor: colors[color],
              '&:hover': {
                backgroundColor: theme.fn.darken(colors[color], 0.1),
              }
            }}
          >
            Take me there!
          </Button>
        </Card.Section>
      </Card>
    )
  })


  return (
    <>
      <SimpleGrid cols={3}
        breakpoints={[
          { maxWidth: 992, cols: 3, spacing: 'md' },
          { maxWidth: 768, cols: 2, spacing: 'sm' },
          { maxWidth: 576, cols: 1, spacing: 'xs' },
        ]}>
        {cards}
      </SimpleGrid>
    </>
  )
}