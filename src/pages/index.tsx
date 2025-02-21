import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from "next/font/google"
import styles from '@/styles/Home.module.css'
import { Tooltip } from '@nextui-org/react'
import { Carousel } from 'react-responsive-carousel'
import React, { useEffect, useRef } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const Bar = useRef<HTMLDivElement>(null);

  const listener = () => {
    let dh = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ),
      wh = document.documentElement.clientHeight,
      pos =
        scrollY ||
        (document.documentElement.clientHeight
          ? document.documentElement.scrollTop
          : document.body.scrollTop),
      bw = (pos / (dh - wh)) * 100;

      if (Bar.current != null) {
        Bar.current.style.width = `${bw}%`;
      }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
  <div>
    <div ref={Bar} className={styles.progressBar}></div>
    <div className={styles.container}>
      <Head>
        <title>Ethan Erickson</title>
        <meta name="description" content="Ethan Erickson's Personal Website" />
        <link rel="icon" href="/e-logo.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.firstsection}>
          <h1 className={styles.title}>Ethan Erickson</h1>

          <div className={styles.bio}>
            <Tooltip content={"That's me!"} color="success">
              <span>
                <Image className={styles.pfp} src="/pfp_square.jpg" alt="Picture of the dev" width={300} height={300} draggable={false}/>
              </span>
            </Tooltip>
            <div className={styles.name}>
              <h3>Developer & Student</h3>
              <h2>Computer Science ⋅ SPU 2026</h2>
            </div>
          </div>
        </div>

        <div className={styles.links}>
          <div className={styles.linkgroup}>
            <div className={styles.music}>
              <Image className={styles.mantis} src="/MNTIS.jpg" alt="Mantis Profile Picture" width={80} height={80} />
              <h2>Music</h2>
            </div>
            <div className={styles.buttons}>
              <Tooltip content={"Spotify"} color="success">
                <a href="https://open.spotify.com/artist/3ovZ8fuAdN3sTuOBWSsMSp" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image src="/spotify.svg" alt="Spotify Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
              <Tooltip content={"Youtube Music"} color="error">
                <a href="https://music.youtube.com/channel/UC25QYgnMuCb5mm8UUsMxPZQ" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image className={styles.ytmusic} src="/youtubemusic.svg" alt="Youtube Music Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
              <Tooltip content={"Apple Music"} color="secondary">
                <a href="https://music.apple.com/us/artist/mntis/1754652274" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image src="/apple.svg" alt="Apple Music Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
              <Tooltip content={"Amazon Music"} color="warning">
                <a href="https://music.amazon.com/artists/B0D88K6FFS/mntis" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image src="/amazon.svg" alt="Amazon Music Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
            </div>
          </div>

          <div className={styles.linkgroup}>
            <h2>Socials</h2>
            <div className={styles.buttons}>
              <Tooltip content={"coderEFE"} color="success">
                <a href="https://github.com/coderEFE" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image src="/github.svg" alt="Github Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
              <Tooltip content={"Ethan Erickson"} color="success">
                <a href="https://www.linkedin.com/in/3than3rickson" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image src="/linkedin.svg" alt="LinkedIn Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
              <Tooltip content={"Personal Channel"} color="success">
                <a href="https://www.youtube.com/@3than3rickson" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image src="/youtube.svg" alt="Youtube Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
              <Tooltip content={"3than_3rickson"} color="success">
                <a href="https://www.instagram.com/3than_3rickson/" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image src="/instagram.svg" alt="Instagram Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
              <Tooltip content={"Game Development"} color="success">
                <a href="https://www.youtube.com/@sst_studios/" target="_blank" rel="noopener noreferrer">
                  <span>
                    <Image src="/youtube.svg" alt="Youtube Logo" width={35} height={35} />
                  </span>
                </a>
              </Tooltip>
            </div>
          </div>
        </div>

        <div className={styles.statement}>
          <h2>About me</h2>
          <code className={styles.code}>
            I enjoy <Link href="#coder" scroll={false}>computer programming</Link>, <Link href="#runner" scroll={false}>running</Link>, <Link href="#writer" scroll={false}>writing novels</Link>, making <Link href="#musician" scroll={false}>music</Link>, and <Link href="#teacher" scroll={false}>teaching</Link> others about Comp Sci topics.
            <br></br>
            I&apos;m especially interested in ML, NLP, game development, and web development.
          </code>
        </div>

        <div className={styles.card} id="coder">
          <code>{'//Coder'}</code>
          <div>
            <p>
            At age nine, I learned to code through free computer science courses on <a target="_blank" rel="noopener noreferrer" href="https://www.khanacademy.org/">Khanacademy</a> and have since learned a variety of languages including JavaScript, Java, Python, C#, and C++.
            In 2019, I published a <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.efe.gamedev.catacombs">puzzle-solving video game</a> on the Google Play store and released an app that displayed my high school&apos;s <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.efe.nhhsbulletin">daily bulletin</a>.
            I am always involved in coding projects (chess bot, chatbot, <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/BZe6VJ-VrMI">poem-generating AI</a>, video game development) and I have participated in several coding competitions like the <a target="_blank" rel="noopener noreferrer" href="https://codingcompetitions.withgoogle.com/codejam/">Google Code Jam</a>, Google Kickstart, and a Hackathon at UW Bothel.
            </p>
            <Carousel className={styles.carousel} showThumbs={false} showStatus={false}>
              <Image src="/computer.jpg" alt="Coding laptop" className="rounded-xl" width={600} height={400}/>
              <Image src="/spaceship-game.png" alt="Spaceship video game" className="rounded-xl" width={600} height={400}/>
            </Carousel>
          </div>
        </div>

        <div className={styles.card} id="runner">
          <code>{'//Runner'}</code>
          <div>
            <p>
            I started running for the <a target="_blank" rel="noopener noreferrer" href="http://www.raincityflyers.com/">Rain City Flyers</a> club at age seven and continued competing in cross country and track throughout all four years of high school.
            I was a cross country team captain during my senior season and helped my squad qualify and compete in the State championship meet in Pasco, Washington.
            Currently, I am an NCAA DII cross country and track athlete at <a target="_blank" rel="noopener noreferrer" href="https://spu.edu/">Seattle Pacific University</a>. 
            <br></br><br></br>
            </p>
            <Carousel className={styles.carousel} showThumbs={false} showStatus={false}>
              <Image src="/xc-team.jpg" alt="XC team at Metros" className="rounded-xl" width={600} height={400}/>
              <Image src="/race.jpg" alt="Finishing a race" className="rounded-xl" width={600} height={400}/>
            </Carousel>
          </div>
        </div>

        <div className={styles.card} id="writer">
          <code>{'//Writer'}</code>
          <div>
            <p>
            I enjoy crafting elaborate plots, primarily of the science fiction and adventure genres. I have self-published a fantasy novel and
            I am currently drafting a Sci-Fi novel about a <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Technological_singularity">rogue artificial intelligence</a>.
            From 2019-2021, I participated three times in the <a target="_blank" rel="noopener noreferrer" href="https://nanowrimo.org/">National Novel Writing Month</a> challenge and wrote 40,000+ words in a single month.
            I was an attorney for my high school <a target="_blank" rel="noopener noreferrer" href="https://www.seattleymca.org/programs/youthprograms/youthandgovernment/mock-trial">Mock Trial</a> team from 2021-2022, developing compelling arguments and questions to persuade the jury.
            I also love reading!
            </p>
            <Carousel className={styles.carousel} showThumbs={false} showStatus={false}>
              <Image src="/themagictrio.png" alt="Sci-Fi novel cover" className="rounded-xl" width={600} height={400}/>
              <Image src="/mock-trial.png" alt="Mock trial competition" className="rounded-xl" width={600} height={400}/>
            </Carousel>
          </div>
        </div>

        <div className={styles.card} id="musician">
          <code>{'//Musician'}</code>
          <div>
            <p>
            I learned to play piano at a young age, but did not start playing in a band until I joined a local <a target="_blank" rel="noopener noreferrer" href="https://www.seattlejazzed.org/">Seattle JazzEd</a> Ensemble in 2019.
            Although this was abridged by the pandemic, I soon became a pianist for my high school jazz band from 2020-2022.
            Around that time, I also played in a jazz combo every Sunday afternoon and performed at several small gigs.
            I also like to compose <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/2CS20uKFoY0">my own songs</a> and beats.
            </p>
            <Carousel className={styles.carousel} showThumbs={false} showStatus={false}>
              <Image src="/newera.jpg" alt="Jazz band setup" className="rounded-xl" width={600} height={400}/>
              <Image src="/band.jpg" alt="NEW Era Jazz combo" className="rounded-xl" width={600} height={400}/>
            </Carousel>
          </div>
        </div>

        <div className={styles.card} id="teacher">
          <code>{'//Teacher'}</code>
          <div>
            <p>
            My parents are both teachers, so it may be inevitable that I follow their lead.
            From 2020-2022, I participated in the <a target="_blank" rel="noopener noreferrer" href="https://breakthroughjuniorchallenge.org/">Breakthrough Junior Challenge</a> and explained complex computer science topics like <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/JXy3mrfKbPg">pathfinding algorithms</a>, <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/76c6fkVOOy4">neural networks</a>, and <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/PW8AUIgigx4">SHA256</a> in short videos.
            I was team captain for an FRC robotics team and I enjoy helping classmates and friends with homework and computer problems. 
            </p>
            <Carousel className={styles.carousel} showThumbs={false} showStatus={false}>
              <Image src="/robotics.jpg" alt="Robo-Raiders" className="rounded-xl" width={600} height={400}/>
              <Image src="/thumbnail.png" alt="Neural net video"  className="rounded-xl" width={600} height={400}/>
            </Carousel>
          </div>
        </div>

        <div className={styles.extra}>
          <h2 className={styles.facts}>Fun Facts</h2>
          <div className={styles.card}>
            <p><u>Favorite music genres:</u> Trap, funk jazz, electro, lo-fi</p>
          </div>
          <div className={styles.card}>
            <p><u>Favorite color:</u> <b>Green - #43e080</b></p>
          </div>
          <div className={styles.card}>
            <p><u>Favorite childhood book series:</u> Artemis Fowl</p>
          </div>
          <div className={styles.card}>
            <p>I was homeschooled until high school 😎</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Ethan Erickson ⋅ 2024
        </a>
      </footer>
    </div>
  </div>
  )
}
