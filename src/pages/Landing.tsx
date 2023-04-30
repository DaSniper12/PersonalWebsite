import HeroHeader from "../components/Landing/HeroHeader";
import StraightCards from "../components/Landing/StraightCards";
import { Container, Divider, useMantineTheme } from "@mantine/core";
import data from "./cardData.json";

export default function Landing() {
  const theme = useMantineTheme()
  return (
    <>
      <HeroHeader />
      <Container>
        <Divider mx="lg" my={theme.spacing.xl * 1.5} />
        <StraightCards data={data} />
      </Container>
    </>
  )
}