import { ShieldCheck, Shuffle, Zap } from 'lucide-react';
import { Globe } from "@/components/magicui/globe";
import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/magicui/terminal";
import { ShineBorder } from "@/components/magicui/shine-border";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Particles } from "@/components/magicui/particles";
import { Marquee } from "@/components/magicui/marquee";
import { Typography } from "@/components/typography";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ReviewCard } from "@/components/ui/review-card";
import { Button } from "@/components/ui/button";
import { reviews } from "@/utils/data";
import { string } from "@/utils/string";
import DiotSciaci from "@/../public/diot-sciaci.png"
import Ozapay from "@/../public/ozapay.png"
import LilyFaciliteLaVie from '@/../public/lily.svg'
import Image from 'next/image';
import { InitPageSession } from '@/components/init-session';
import { LinkTrack } from '@/components/link-track';
import { SpredictIcon } from '@/components/icons/network/Spredict';
import { LilyIcon } from '@/components/icons/network/Lily';

const Home = () => (
  <>
    <section className="w-full py-4 md:py-8 flex flex-col-reverse md:flex-row">
      <div className=" md:w-1/2 flex">
        <div className="md:w-3/4 relative my-auto flex flex-col items-start border-b-1 border-b-[--foreground]/15">
          <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl font-light">
            {string.hero.title1}
          </AuroraText>
          <Typography.Header1 className="z-10 md:mt-6 font-light">
            {string.hero.title2}
          </Typography.Header1>
          <Typography.Text className="mt-4! md:mt-8! md:font-normal font-thin">{string.hero.desc}</Typography.Text>
          <LinkTrack eventName='home-hero-button' href={'/contact'}>
            <Button variant="outline" className="relative cursor-pointer rounded-full border-(--secondary) my-4 md:my-12">
              {string.hero.button}
              <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </Button>
          </LinkTrack>
        </div>
      </div>
      <div className="h-[100vw] md:h-[50vw] md:w-[50vw] max-h-[700px] max-w-[700px] relative overflow-hidden">
        <Globe className="m-auto" />
      </div>
    </section>
    <section id="companies">
      <div className="py-14">
        <div className="w-full mx-auto ">
          <Typography.Header3 className="text-center text-sm font-semibold text-gray-500">
             ILS NOUS ONT FAIT CONFIANCE
          </Typography.Header3>
          <div className="relative mt-6">
            <div className="flex items-center justify-center flex-wrap">
              <LilyIcon
                className="size-28 px-2 mx-2 md:mx-8 rounded fill-primary"
              />
              <SpredictIcon
                className="Size-14 px-2 mx-2 md:mx-8 rounded"
              />
              <img
                src={DiotSciaci.src}
                className="h-18 w-40 px-2 mx-2 md:mx-8 rounded-full"
                alt={'diot-sciaci'}
              />
              <img
                src={Ozapay.src}
                className="h-10 w-auto px-2 mx-2 md:mx-8 rounded-full"
                alt={'diot-sciaci'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="w-full py-4 md:py-8 flex flex-col-reverse md:flex-row justify-left items-center gap-6">
      <div className="md:w-1/2 flex items-center">
        <div className="md:w-3/4 my-auto py-4 md:py-12 flex flex-col justify items-start md:border-b-1 md:border-b-[--foreground]/15">
          <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light!">
            {string.section1.title}
          </AuroraText>
          <Typography.Text className=" mt-4! md:mt-8! leading-5! md:leadin8! md:font-normal font-thin">
            {string.section1.text1}
          </Typography.Text>
          <Typography.Text className="mt-0! leading-5! font-thin md:leadin8! md:font-normal">
            {string.section1.text2}
          </Typography.Text>
          <LinkTrack eventName="home-solution-button" href={'/services'}>
            <Button variant="outline" className=" relative cursor-pointer rounded-full mt-4 md:mt-12">
              {string.section1.button}
              <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </Button>
          </LinkTrack>
        </div>
      </div>
      <Terminal className="md:w-1/2 h-[400px]">
        <TypingAnimation>{string.section1.terminal[1]}</TypingAnimation>
        <AnimatedSpan className="text-green-500">
          <span>{string.section1.terminal[2]}</span>
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          <span>{string.section1.terminal[3]}</span>
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          <span>{string.section1.terminal[4]}</span>
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          <span>{string.section1.terminal[5]}</span>
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          <span>{string.section1.terminal[6]}</span>
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          <span>{string.section1.terminal[7]}</span>
        </AnimatedSpan>
        <AnimatedSpan className="text-green-500">
          <span>{string.section1.terminal[8]}</span>
        </AnimatedSpan>
        <AnimatedSpan className="text-blue-500">
          <span>{string.section1.terminal.livrable}</span>
          <span className="pl-2">{string.section1.terminal.livrable1}</span>
          <span className="pl-2">{string.section1.terminal.livrable2}</span>
        </AnimatedSpan>
        <TypingAnimation className="text-muted-foreground">
          {string.section1.terminal.finalText}
        </TypingAnimation>
        <TypingAnimation className="text-muted-foreground">
          {string.section1.terminal.nextStep}
        </TypingAnimation>
      </Terminal>
    </section>
    <section className="w-full py-4 md:py-8 mb-12">
      <div className="w-full m-auto mb-12">
        <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light! w-full">
          Pourquoi nous ?
        </AuroraText>
      </div>
      <div className="w-full m-auto grid grid-rows-3 md:grid-cols-3 md:grid-rows-none gap-6">
        <Card className="relative overflow-hidden w-full rounded-[0.625rem]">
          <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
          <CardHeader className="flex items-center">
            <Zap />
            <CardTitle>{string.section2.card1.title}</CardTitle>
          </CardHeader>
          <CardContent className="font-thin md:font-normal">
            {string.section2.card1.text}
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden w-full rounded-[0.625rem]">
          <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
          <CardHeader className="flex items-center">
            <ShieldCheck />
            <CardTitle>{string.section2.card2.title}</CardTitle>
          </CardHeader>
          <CardContent className="font-thin md:font-normal">
            {string.section2.card2.text}
          </CardContent>
        </Card>
        <Card className="relative overflow-hidden w-full rounded-[0.625rem]">
          <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
          <CardHeader className="flex items-center">
            <Shuffle />
            <CardTitle>{string.section2.card3.title}</CardTitle>
          </CardHeader>
          <CardContent className="font-thin md:font-normal">
            {string.section2.card3.text}
          </CardContent>
        </Card>
      </div>
    </section>
    <section className="w-full py-4 md:py-8">
      <div className="w-full m-auto mb-10">
        <AuroraText colors={["var(--foreground)", "#5200FF", "#FF2DF7"]} className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 font-light! w-full">
          {string.section3.title}
        </AuroraText>
      </div>
      <div className="relative flex w-full m-auto flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:60s]">
          {reviews.map((review) => (
            <ReviewCard shorted key={review.name} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
    <section className="relative w-full py-4 overflow py-24 md:py-32">
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={200}
        color={"#00F0FF"}
      />
      <Card className="relative overflow-hidden w-full m-auto rounded-[0.625rem] border-0 bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] pt-8 md:p-12">
        <CardHeader className="flex items-center text-white">
          <CardTitle className="text-2xl">
            {string.section4.title}
          </CardTitle>
        </CardHeader>
        <CardContent className=" md:font-normal text-white">
          {string.section4.text}
        </CardContent>
        <CardFooter>
          <LinkTrack eventName='home-start-button' href={'/contact'}>
            <Button variant="outline" className="bg-black/15 relative cursor-pointer rounded-full text-white">
              {string.section4.button}
              <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
            </Button>
          </LinkTrack>
        </CardFooter>
        <ShineBorder shineColor={["#00F0FF", "#5200FF", "#FF2DF7"]} />
      </Card>
    </section>
    <InitPageSession page="home"/>
  </>
)

export default Home;