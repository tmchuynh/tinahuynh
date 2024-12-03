"use client";

import RootLayout from "@/app/layout";
import BlurFade from "@/components/ui/blur-fade";
import Breadcrumb from "@/components/ui/breadcrumb";
import React, { useEffect, useState } from "react";
import { FaBook, FaCheck, FaRegLightbulb } from "react-icons/fa6";

const breadcrumbItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Info",
    dropdownItems: [
      { label: "Accessibility Declaration", href: "/info/accessibility" },
      { label: "Resume", href: "/info/resume" },
      { label: "Tech Stack", href: "/info/techStack" },
      { label: "Achievements", href: "/info/experiences&achievements" },
    ],
  },
  {
    label: "About Me",
  },
];


const AboutPage = () => {
  const [mounted, setMounted] = useState( false );

  useEffect( () => {
    setMounted( true );
  }, [] );

  if ( !mounted ) {
    return null;
  }

  return (
    <RootLayout title="About Tina Huynh" description="Learn more about Tina, a Full Stack Web Developer.">
      <div className="max-w-7xl mx-auto p-6">
        <Breadcrumb items={breadcrumbItems} />

        {/* About Me Title */}
        <BlurFade delay={0.25}>
          <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
        </BlurFade>

        {/* About Me Paragraph */}
        <BlurFade delay={0.45}>
          <p className="text-lg">
            Hi, I’m <strong>Tina Huynh</strong>, a passionate <strong>Full-Stack Web Developer</strong> with a
            relentless curiosity for all things tech and design. My journey into web development began in 2020 as a
            self-taught front-end enthusiast, driven by a desire to create intuitive, engaging, and impactful digital
            experiences. In 2023, I expanded my expertise by completing a <strong>Full-Stack Web Development Bootcamp</strong>,
            diving deep into the intricacies of back-end development and solidifying my skills across the entire stack.
          </p>
        </BlurFade>

        <hr className="my-8" />

        {/* What I Bring to the Table Title */}
        <BlurFade delay={0.55}>
          <h2 className="text-2xl font-semibold mt-8 mb-4">What I Bring to the Table</h2>
        </BlurFade>

        {/* What I Bring to the Table Description */}
        <BlurFade delay={0.55}>
          <p className="text-lg">
            I thrive at the intersection of <strong>functionality and creativity</strong>, blending technical proficiency with
            innovative design to build websites that are as effective as they are elegant. Whether it’s crafting seamless user
            interfaces or engineering robust server-side solutions, I approach every project with a user-first mindset,
            ensuring that:
          </p>
          <ul className="list-none mt-4">
            <li>
              <BlurFade delay={0.6} className="inline-flex">
                <FaBook
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p><strong>Clean, User-Centered Design</strong>: Websites should not just look good but also feel intuitive to navigate.</p>
              </BlurFade>
            </li>
            <li>
              <BlurFade delay={0.65} className="inline-flex">
                <FaBook
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p><strong>Accessibility for All</strong>: I’m deeply committed to making the web a more inclusive space, particularly
                  for neurodivergent users and those with disabilities.</p>
              </BlurFade>
            </li>
            <li>
              <BlurFade delay={0.7} className="inline-flex">
                <FaBook
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p> <strong>Continuous Learning</strong>: Web development is an ever-evolving field, and I’m eager to stay ahead of
                  the curve by exploring emerging technologies and best practices.</p>
              </BlurFade>
            </li>
          </ul>
        </BlurFade>

        <hr className="my-8" />

        {/* My Vision Title */}
        <BlurFade delay={0.65}>
          <h2 className="text-2xl font-semibold mt-8 mb-4">My Vision</h2>
        </BlurFade>

        {/* My Vision Description */}
        <BlurFade delay={0.65}>
          <p className="text-lg">
            The web is a powerful platform that connects people, ideas, and solutions. I aim to contribute by building digital
            experiences that are:
          </p>
          <ul className="list-none mt-4">
            <li>
              <BlurFade delay={0.7} className="inline-flex">
                <FaRegLightbulb
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p> <strong>Visually Stunning</strong>: Balancing simplicity and creativity to make designs memorable.</p>
              </BlurFade>
            </li>
            <li>
              <BlurFade delay={0.75} className="inline-flex">
                <FaRegLightbulb
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p> <strong>Effortlessly Navigable</strong>: Prioritizing usability and accessibility for all users, regardless of ability or neurodiversity.</p>
              </BlurFade>
            </li>
            <li>
              <BlurFade delay={0.8} className="inline-flex">
                <FaRegLightbulb
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p> <strong>Technically Sound</strong>: Ensuring scalable, efficient, and maintainable code across the stack.</p>
              </BlurFade>
            </li>
          </ul>
        </BlurFade>

        <hr className="my-8" />

        {/* A Lifelong Learner Title */}
        <BlurFade delay={0.75}>
          <h2 className="text-2xl font-semibold mt-8 mb-4">A Lifelong Learner</h2>
        </BlurFade>

        {/* A Lifelong Learner Description */}
        <BlurFade delay={0.75}>
          <p className="text-lg">
            I’ve always been someone who picks up skills quickly and eagerly dives into new challenges. Beyond my expertise
            in full-stack development, I’m actively expanding my knowledge in areas like:
          </p>
          <ul className="list-none mt-4">
            <li>
              <BlurFade delay={0.8} className="inline-flex">
                <FaCheck
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p> <strong>Web Design & UX/UI</strong>: Enhancing the aesthetics and functionality of digital experiences.</p>
              </BlurFade>
            </li>
            <li>
              <BlurFade delay={0.85} className="inline-flex">
                <FaCheck
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p> <strong>Web Accessibility</strong>: Advocating for a more inclusive web that caters to all users.</p>
              </BlurFade>
            </li>
            <li>
              <BlurFade delay={0.9} className="inline-flex">
                <FaCheck
                  className="mr-2 h-6 w-6 text-tertiary"
                  aria-hidden="true"
                />
                <p><strong>Emerging Tech Trends</strong>: Staying updated on cutting-edge tools and frameworks to deliver the best solutions.</p>
              </BlurFade>
            </li>
          </ul>
        </BlurFade>

        <hr className="my-8" />

        {/* Let’s Build Something Amazing Title */}
        <BlurFade delay={0.85}>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Let’s Build Something Amazing</h2>
        </BlurFade>

        {/* Let’s Build Something Amazing Description */}
        <BlurFade delay={0.85}>
          <p className="text-lg">
            I’m looking to connect with <strong>forward-thinking employers and collaborators</strong> who share my passion for
            innovation and excellence in web development. If you’re seeking someone who’s not only technical but also highly
            adaptable, creative, and driven by a desire to learn, I’d love to hear from you!
          </p>
        </BlurFade>

      </div>
    </RootLayout>
  );
};

export default AboutPage;
