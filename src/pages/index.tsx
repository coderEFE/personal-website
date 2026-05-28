import Head from 'next/head'
import Image from 'next/image'
import { Inter } from "next/font/google"
import styles from '@/styles/Home.module.css'
//import { Tooltip } from "@heroui/react"
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import React, { useEffect, useRef } from "react"

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

  interface CustomTooltipProps extends TooltipProps {
    rgb?: string;
  }

  const CustomTooltip = styled(({ className, rgb, ...props }: CustomTooltipProps) => (
    <Tooltip {...props} placement="top" classes={{ popper: className }}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -5],
              },
            },
          ],
        },
      }}
    />
  ))<CustomTooltipProps>(({ theme, rgb }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: rgb || theme.palette.common.white,
      color: theme.palette.common.black,
      fontFamily: inter.style.fontFamily,
      fontSize: 14
    }
  }));

  return (
  <div>
    <div ref={Bar} className={styles.progressBar}></div>
    <nav className={styles.navbar}>
      <a href="#about" className={styles.navbtn}> About </a>
      <a href="#experience" className={styles.navbtn}> Experience </a>
      <a href="#music" className={styles.navbtn}> Music </a>
      <a href="#hobbies" className={styles.navbtn}> Hobbies </a>
    </nav>
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
            <CustomTooltip title={"That's me!"} rgb="rgb(67, 224, 128)">
              <span>
                <Image className={styles.pfp} src="/pfp-microsoft-headshot.png" alt="Picture of Ethan Erickson" width={300} height={300} draggable={false}/>
              </span>
            </CustomTooltip>
            <div className={styles.name}>
              <h3>Developer & Student</h3>
              <h2>Computer Science ⋅ SPU 2026</h2>
              <div className={styles.linkgroup}>
                <div className={styles.buttons}>
                  <CustomTooltip title={"coderEFE"} placement="top" rgb="rgb(67, 224, 128)">
                    <a href="https://github.com/coderEFE" target="_blank" rel="noopener noreferrer">
                      <span>
                        <Image src="/github.svg" alt="Github Logo" width={45} height={45} />
                      </span>
                    </a>
                  </CustomTooltip>
                  <CustomTooltip title={"Ethan Erickson"} placement="top" rgb="rgb(67, 224, 128)">
                    <a href="https://www.linkedin.com/in/3than3rickson" target="_blank" rel="noopener noreferrer">
                      <span>
                        <Image src="/linkedin.svg" alt="LinkedIn Logo" width={45} height={45} />
                      </span>
                    </a>
                  </CustomTooltip>
                  <CustomTooltip title={"Personal Channel"} placement="top" rgb="rgb(67, 224, 128)">
                    <a href="https://www.youtube.com/@3than3rickson" target="_blank" rel="noopener noreferrer">
                      <span>
                        <Image src="/youtube.svg" alt="Youtube Logo" width={45} height={45} />
                      </span>
                    </a>
                  </CustomTooltip>
                  <CustomTooltip title={"3than_3rickson"} placement="top" rgb="rgb(67, 224, 128)">
                    <a href="https://www.instagram.com/3than_3rickson/" target="_blank" rel="noopener noreferrer">
                      <span>
                        <Image src="/instagram.svg" alt="Instagram Logo" width={45} height={45} />
                      </span>
                    </a>
                  </CustomTooltip>
                  <CustomTooltip title={"Game Development"} placement="top" rgb="rgb(67, 224, 128)">
                    <a href="https://www.youtube.com/@sst_studios/" target="_blank" rel="noopener noreferrer">
                      <span>
                        <Image src="/youtube.svg" alt="Youtube Logo" width={45} height={45} />
                      </span>
                    </a>
                  </CustomTooltip>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.statement} id="about">
          <h2 className={styles.sectionHeader}>About me</h2>
            <code className={styles.code}>
            I am a results-driven <span className={styles.keywordTeal}>software engineer</span> and <span className={styles.keywordPink}>lifelong learner</span> who is fascinated with <span className={styles.keywordCyan}>machine learning</span>, <span className={styles.keywordCyan}>game development</span>, and <span className={styles.keywordCyan}>cybersecurity</span>. I enjoy transforming my <span className={styles.keywordPink}>imagination</span> into tangible programs that inspire others or solve problems.
            <br></br><br></br>
            As a Computer Science and Honors student at Seattle Pacific University, I have experience with a broad range of programming languages like <span className={styles.keywordTeal}>C++, C#, Java, JS, Python, R, and SQL</span>, and I am a <span className={styles.keywordPink}><i>fast learner</i></span> of any development framework or tool.
            </code>
        </div>

        <div id="experience">
          <h2 className={styles.sectionHeader}>Work Experience</h2>
          <div className={styles.resume}>
            <object
              data="/EthanErickson_Oct2025.pdf" 
              type="application/pdf" 
              width="750px" 
              height="1000px"
            >
            <p className={styles.backupResumeText}>PDF viewer failed to load. <a href="/EthanErickson_Oct2025.pdf">Download Resume PDF</a></p>
            </object>
          </div>
          <div className={styles.card}>
            <code><strong>{'Software Engineer Intern'}</strong></code>
            <p>Microsoft ⋅ June 2025 - August 2025</p>
            <div>
              <p>
                My second Microsoft internship involved developing an <b>AI agent</b> that performed comprehensive analyses of customer-reported incidents, identifying correct root causes for <b>50% of incidents</b>. This internal tool was important to members of my team because it reduced time to mitigation by <b>50+ hours per incident</b>.
                I created a <b>Model Context Protocol</b> server in C# that exposed tools to the AI agent for querying Kusto databases, reading Azure DevOps wiki pages, reading logs and code files, and finding similar historical incidents.
                I also established an Azure DevOps CI/CD pipeline using YAML to publish the MCP server to an internal package feed when new changes were pushed.
                This project forced me to reach out to many different on-call engineers to understand their pain points, and I had to collaborate closely with them and other team members to develop a useful tool.
              </p>
              <Image src="/microsoft-setup.jpg" alt="Office setup at Microsoft" className="rounded-xl" width={600} height={400}/>
            </div>
          </div>
          <div className={styles.card}>
            <code><strong>{'Software Engineer Intern'}</strong></code>
            <p>Microsoft ⋅ June 2024 - August 2024</p>
            <div>
              <p>
                My first Microsoft internship involved improving <b>Microsoft's Security Token Service</b> to enable flexible claim matching for workloads from 3rd parties (GitHub, GitLab, Terraform Cloud) to Azure. 
                Shipping this feature into production was important because it was <b>highly requested by large customers in AI and telecommunications</b>. 
                I Researched and benchmarked wildcard matching algorithms, optimizing worst-case scenarios to run <b>less than 1 millisecond</b>. 
                I also wrote extensive unit tests, end-to-end tests, and published a NuGet used by the Azure App Model team.
                This project required me to learn about authentication protocols, read and understand a large codebase, and thouroughly test my code under a variety of edge cases.
              </p>
              <Image src="/microsoft-campus.jpg" alt="Redmond campus at Microsoft" className="rounded-xl" width={600} height={400}/>
            </div>
          </div>
        </div>
        
        <div className={styles.linkgroup} id="music">
          <div className={styles.music}>
            <Image className={styles.mantis} src="/MNTIS.jpg" alt="Mantis Profile Picture" width={100} height={100} />
            <h2>Music</h2>
          </div>
          <div className={styles.buttons}>
            <CustomTooltip title={"Spotify"} placement="top" rgb="rgb(67, 224, 128)">
              <a href="https://open.spotify.com/artist/3ovZ8fuAdN3sTuOBWSsMSp" target="_blank" rel="noopener noreferrer">
                <span>
                  <Image src="/spotify.svg" alt="Spotify Logo" width={45} height={45} />
                </span>
              </a>
            </CustomTooltip>
            <CustomTooltip title={"Youtube Music"} placement="top" rgb="rgba(255, 61, 106, 1)">
              <a href="https://music.youtube.com/channel/UC25QYgnMuCb5mm8UUsMxPZQ" target="_blank" rel="noopener noreferrer">
                <span>
                  <Image className={styles.ytmusic} src="/youtubemusic.svg" alt="Youtube Music Logo" width={45} height={45} />
                </span>
              </a>
            </CustomTooltip>
            <CustomTooltip title={"Apple Music"} placement="top" rgb="rgb(255, 100, 100)">
              <a href="https://music.apple.com/us/artist/mntis/1754652274" target="_blank" rel="noopener noreferrer">
                <span>
                  <Image src="/apple.svg" alt="Apple Music Logo" width={45} height={45} />
                </span>
              </a>
            </CustomTooltip>
            <CustomTooltip title={"Amazon Music"} placement="top" rgb="rgb(255, 100, 0)">
              <a href="https://music.amazon.com/artists/B0D88K6FFS/mntis" target="_blank" rel="noopener noreferrer">
                <span>
                  <Image src="/amazon.svg" alt="Amazon Music Logo" width={45} height={45} />
                </span>
              </a>
            </CustomTooltip>
          </div>
        </div>

        <div id="hobbies">
          <h2 className={styles.sectionHeader}>Hobbies</h2>
          <code className={styles.code}>
            I enjoy <a href="#gamedev">video game development</a>, <a href="#runner">running</a>, <a href="#writer">writing novels</a>, making <a href="#musician">music</a>, and <a href="#teacher">teaching</a> others about Comp Sci topics.
          </code>
          <div className={styles.card} id="gamedev">
            <code>{'// Game Developer'}</code>
            <div>
              <p>
              At age nine, I learned to code through free computer science courses on <a target="_blank" rel="noopener noreferrer" href="https://www.khanacademy.org/">Khanacademy</a> and have since learned a variety of languages including JavaScript, Java, Python, C#, and C++.
              In 2019, I published a <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.efe.gamedev.catacombs">puzzle-solving video game</a> on the Google Play store.
              In recent years, I have been working on an <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@sst_studios">open-world spaceship shooter game</a> in Unity, with a goal of publishing it on Steam.
              </p>
              <Carousel className={styles.carousel} showThumbs={false} showStatus={false}>
                <Image src="/computer.jpg" alt="Coding laptop" className="rounded-xl" width={600} height={400}/>
                <Image src="/spaceship-game.png" alt="Spaceship video game" className="rounded-xl" width={600} height={400}/>
              </Carousel>
            </div>
          </div>

          <div className={styles.card} id="runner">
            <code>{'// Runner'}</code>
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
            <code>{'// Writer'}</code>
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
            <code>{'// Musician'}</code>
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
            <code>{'// Teacher'}</code>
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
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Developed by Ethan Erickson ⋅ 2025
        </a>
      </footer>
    </div>
  </div>
  )
}
