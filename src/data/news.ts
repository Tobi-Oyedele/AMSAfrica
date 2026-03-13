export type News = {
  title: string;
  date: string;
  image: string;
  description?: string;
  link?: string;
  linkText?: string;
};

export const newsData: News[] = [
  {
    title: "AMSA 2026 Medical Education Conference",
    date: "March 23 - 25, 2026",
    image: "/images/new-flyer-1.jpeg",
    link: "https://www.amsafricaconference.org",
    linkText: "Register Now",
  },
  {
    title: "AMSA 2026 Medical Education Conference",
    date: "March 23 - 25, 2026",
    image: "/images/new-flyer-2.jpeg",
    link: "https://www.amsafricaconference.org",
    linkText: "Register Now",
  },
  {
    title: "AMSA 2026 Medical Education Conference",
    date: "March 23 - 25, 2026",
    image: "/images/new-flyer-3.jpeg",
    link: "https://www.amsafricaconference.org",
    linkText: "Register Now",
  },
  {
    title: "AMSA 2026 Medical Education Conference",
    date: "March 23 - 25, 2026",
    image: "/images/new-flyer-4.jpeg",
    link: "https://www.amsafricaconference.org",
    linkText: "Register Now",
  },
  {
    title: "AMSA 2026 Medical Education Conference",
    date: "March 23 - 25, 2026",
    image: "/images/new-flyer-5.jpeg",
    link: "https://www.amsafricaconference.org",
    linkText: "Register Now",
  },
  {
    title: "AMSA 2026 Medical Education Conference",
    date: "March 23 - 25, 2026",
    image: "/images/new-flyer-6.jpeg",
    link: "https://www.amsafricaconference.org",
    linkText: "Register Now",
  },

  {
    title: "AMSA Medical Education Conference 2026 Pre-conference Workshop",
    date: "March 23 - 25, 2026",
    image: "/images/amsa-2026-pre-conference.jpg",
    description: "Register early to secure your space!",
    link: "https://www.amsafricaconference.org",
    linkText: "Register Now",
  },
  // {
  //   title: "AMSA Medical Education Conference 2026",
  //   date: "March 24 - 26, 2026",
  //   image: "/images/amsa_updated_flyer.jpeg",
  //   description:
  //     "Increasing capacity and retention of the global health workforce",
  //   link: "https://www.amsafricaconference.org",
  //   linkText: "Register Now",
  // },
  // {
  //   title: "AMSA Medical Education Conference Call for Abstracts",
  //   date: "March 24 - 26, 2026",
  //   image: "/images/call-for-abstracts.jpg",
  //   description: "Each Abstract should not be more tha 300 words",
  //   link: "https://www.amsafricaconference.org",
  //   linkText: "Register Now",
  // },
];
