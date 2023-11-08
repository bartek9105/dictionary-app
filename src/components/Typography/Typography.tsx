import { FC } from "react";
import { Heading, HeadingProps } from "./Heading/Heading";
import { Body, BodyProps } from "./Body/Body";

interface TypographyType {
  Heading: FC<HeadingProps>;
  Body: FC<BodyProps>;
}

export const Typography = {} as TypographyType;

Typography.Heading = Heading;
Typography.Body = Body;

export default Typography;
