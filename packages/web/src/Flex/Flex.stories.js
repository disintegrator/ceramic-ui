import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import P from "../Paragraph";
import Flex from "./Flex";
import Readable from "../Readable";

const itemAlignments = [
  "normal",
  "center",
  "flex-start",
  "flex-end",
  "stretch",
  "inherit",
  "initial"
];

const contentAlignments = [
  "center",
  "flex-start",
  "flex-end",
  "stretch",
  "inherit",
  "initial"
];

storiesOf("Flex", module).add("Basic", () => {
  const alignItems = select("align-items", itemAlignments, "stretch");
  const alignContent = select("align-content", contentAlignments, "unset");
  const direction = select(
    "flex-direction",
    ["row", "row-reverse", "column", "column-reverse"],
    "row"
  );
  const wrap = select(
    "flex-wrap",
    ["nowrap", "wrap", "wrap-reverse", "inherit", "initial"],
    "wrap"
  );
  return (
    <Readable>
      <Flex
        wrap={wrap}
        alignItems={alignItems}
        alignContent={alignContent}
        direction={direction}
      >
        <Flex.Item>
          <P>
            First example<br />Has two lines
          </P>
        </Flex.Item>
        <Flex.Item flush>
          <P>Second example</P>
        </Flex.Item>
        <Flex.Item>
          <P>Third example</P>
        </Flex.Item>
        <Flex.Item order={-1}>
          <P>Fourth example</P>
        </Flex.Item>
        <Flex.Item grow={1}>
          <P>Fifth example</P>
        </Flex.Item>
        <Flex.Item>
          <P>Sixth example</P>
        </Flex.Item>
        <Flex.Item>
          <P>Seventh example</P>
        </Flex.Item>
      </Flex>
    </Readable>
  );
});
