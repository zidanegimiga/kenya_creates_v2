import { Metadata } from "next";
import TheoryOfChangeSection from "../components/TheoryOfChange";
import Footer from "../components/Footer";
import JoinMovementSection from "../components/JoinMovement";
import CollaborateSection from "../components/Form";
import { motion, Variants } from "framer-motion";
import WhoWeAreSection from "../components/Stats";

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: [1.1, 0.95, 1], // quick “pop”
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

interface Stat {
  label: string;
  value: string;
}

const stats: Stat[] = [
  { label: "Films", value: "4" },
  { label: "Founded", value: "2023" },
  { label: "Screenings", value: "21" },
  { label: "Viewers", value: "21K" },
];

export const metadata: Metadata = {
  title: "Kenya Creates – Who We Are and Why We Matter",
  description:
    "Our films speak to the heart, addressing the real barriers young people face while providing tools to navigate life with confidence.",
};

export default function WhoWeArePage() {
  const stats = [
    { label: "FILMS", value: "4" },
    { label: "FOUNDED", value: "2023" },
    { label: "SCREENINGS", value: "21" },
    { label: "VIEWERS", value: "21K" },
  ];

  return (
    <>
      <WhoWeAreSection />
      <TheoryOfChangeSection />
      <JoinMovementSection />
      <CollaborateSection />
      <Footer />
    </>
  );
}
