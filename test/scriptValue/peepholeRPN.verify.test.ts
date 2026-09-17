import { scriptValueToSubpixels } from "../../src/lib/compiler/scriptBuilder/helpers";
import { precompileScriptValue } from "../../src/shared/lib/scriptValue/helpers";

test("should mask a camera position read and written in tile units", () => {
  const input = scriptValueToSubpixels(
    {
      type: "property",
      target: "camera",
      property: "xpos",
    },
    "tiles",
  );

  expect(precompileScriptValue(input)[0]).toEqual([
    {
      type: "memI16",
      value: "camera_x",
    },
    {
      type: "number",
      value: 0xff00,
    },
    {
      type: "bAND",
    },
  ]);
});
