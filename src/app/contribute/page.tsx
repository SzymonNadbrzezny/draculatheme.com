import "./page.scss";
import { Metadata } from "next";
import ColorPalette from "src/components/contribute/colorPalette";
import OurProject from "src/components/contribute/ourProject";
import Steps from "src/components/contribute/steps";

export const metadata: Metadata = {
  title: "Contribute",
  description:
    "Check this guide to understand how to contribute to Dracula, including the most commonly asked questions and the color palette.",
  alternates: {
    canonical: "/contribute"
  }
};

const Contribute = () => {
  return (
    <section className="contribute">
      <div className="container">
        <OurProject />
        <Steps />
        <ColorPalette />
      </div>
    </section>
  );
};

export default Contribute;
