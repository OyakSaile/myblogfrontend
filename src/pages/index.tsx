import Head from "next/head";
import Image from "next/image";
import { Container, Content, DivImage } from "@styles/pages/HomeStyle";
import { MyInformations } from "@components/pages/HomeComponents/MyInformations";
import { SideBar } from "@components/SideBar";

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Kayo Elias - Full-Stack Developer</title>
      </Head>
      <SideBar />
      <Content>
        <MyInformations />
        <DivImage>
          <Image
            quality={100}
            src="/kayoelias.png"
            alt="Kayo Elias - FullStack Developer"
            fill
          />
        </DivImage>
      </Content>
    </Container>
  );
}
