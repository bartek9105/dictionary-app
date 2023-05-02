import { FC } from "react";
import { Heading, HeadingProps } from "./Heading/Heading";
interface TypographyType {
  Heading: FC<HeadingProps>;
}

export const Typography = {} as TypographyType;

Typography.Heading = Heading;

export default Typography;
