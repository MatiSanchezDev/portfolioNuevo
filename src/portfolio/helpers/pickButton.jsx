import { SvgFramer } from "../components/componentIcons/SvgFramer";
import { SvgReact } from "../components/componentIcons/SvgReact";
import { SvgReactQuery } from "../components/componentIcons/SvgReactQuery";
import { SvgRedux } from "../components/componentIcons/SvgRedux";
import { SvgTailwind } from "../components/componentIcons/SvgTailwind";

export const pickButton = (category) => {
  if (category === "react") return <SvgReact />;
  if (category === "react query") return <SvgReactQuery />;
  if (category === "redux toolkit") return <SvgRedux />;
  if (category === "tailwind") return <SvgTailwind />;
  if (category === "framer motion") return <SvgFramer />;
  return <span className="text-sm">ALL</span>;
};
