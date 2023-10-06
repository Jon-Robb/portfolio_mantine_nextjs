import { useState, useContext, useEffect, useRef } from 'react';
import { AppShell, Transition } from '@mantine/core';
import BrandAnimation from '../Animation/BrandAnimation/BrandAnimation';
import AppHeader from '../AppHeader/AppHeader';
import AppNavMenu from '../AppNavMenu/AppNavMenu';
import HomeSection from '../Home/HomeSection';
import About from '../About/About';
import Projects from '../Projects/Projects';
// import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import useStyles from './AppShellContainer.styles';
import { useScreenWidth } from '../../hooks/useScreenSize';
import { EntryAnimationContext } from '../../contexts/EntryAnimationContext';
import useIsInViewport from '../../hooks/useIsInViewport';

export default function AppShellContainer() {
  const [opened, setOpened] = useState(false);
  const toggleOpened = () => setOpened((o) => !o);
  const { classes } = useStyles();
  const { entryAnimationCompleted } = useContext(EntryAnimationContext)!;
  const screenWidth = useScreenWidth();

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const homeEntry = useIsInViewport(homeRef);
  const aboutEntry = useIsInViewport(aboutRef);
  const projectsEntry = useIsInViewport(projectsRef);
  const contactEntry = useIsInViewport(contactRef);

  const entries = [homeEntry, aboutEntry, projectsEntry, contactEntry];

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const activeSections:string[] = [];
    entries.forEach((entry) => {
      if (!entry) return;
      if (entry.isIntersecting) {
        activeSections.push(entry.target.id);
      }
    });
    if (activeSections.length > 0) {
      setActiveSection(activeSections[0]);
    }
      // if (activeSections[0] !== activeSection) {
      //   setActiveSection(activeSections[0]);
      // }
  }, [entries]);

  useEffect(() => {
    if (!entryAnimationCompleted) return;
    if (screenWidth > 768) {
      setOpened(true);
    }
  }, [screenWidth, entryAnimationCompleted]);
  return (
    <>
      {!entryAnimationCompleted && (
        <BrandAnimation />
      )}
      <AppShell className={classes.appshell} navbarOffsetBreakpoint="sm" navbar={<AppNavMenu activeSection={activeSection} opened={opened} />} header={<AppHeader onClick={toggleOpened} opened={opened} />}>
          <HomeSection nodeRef={homeRef} />
        <Transition transition="fade" duration={1000} timingFunction="ease" mounted={entryAnimationCompleted} keepMounted>
          {(styles) =>
            <div style={styles}>
              <About nodeRef={aboutRef} />
              <Projects nodeRef={projectsRef} />
              {/* <Services /> */}
              <Contact nodeRef={contactRef} />
            </div>}
        </Transition>
      </AppShell>
    </>
  );
}
