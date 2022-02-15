import "!style-loader!css-loader!sass-loader!../src/styles/globals.scss";
import * as NextImage from "next/image";

const Image = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: props => <Image {...props} unoptimized />,
});
