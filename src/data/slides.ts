export type Slide =
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "image-overlay";
      src: string;
      alt?: string;
      overlayTitle: string;
      overlayText?: string;
    }
  | {
      type: "side-by-side";
      src: string;
      alt?: string;
      title: string;
      text?: string;
    }
  | {
      type: "text-only";
      title: string;
      text: string;
    };

export const slides: Slide[] = [
  //images
  {
    type: "image",
    src: "/images/amsa1.jpg",
  },
  {
    type: "image",
    src: "/images/amsa2.jpg",
  },
  {
    type: "image",
    src: "/images/amsa3.jpg",
  },

  // //side-by-side
  // {
  //   src: "/images/amsa-2026-save-the-date.jpg",
  //   type: "side-by-side",
  //   title: "Medical Education Conference",
  //   text: "Increasing Capacity and Retention of The Global Health ",
  // },
  // {
  //   src: "/images/call-for-abstracts.jpg",
  //   type: "side-by-side",
  //   title: "Call for Abstract",
  //   // text: "Each Abstract should not be more than 300 words and structured as follows: Introduction, Aim(s), Methodology, Result and Conclusion. Abstracts are to be submimitted to abstract@amsafricaconference.org in Ms word form on or before 31st January, 2026 with the name of the presenter underlined",
  // },
];
