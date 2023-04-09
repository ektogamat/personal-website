import { BlendFunction, Effect } from "postprocessing";
import { Uniform } from "three";

const fragmentShader = /* glsl */ `
    uniform float frequency;
    uniform float amplitude;
    uniform float offset;

    void mainUv(inout vec2 uv)
    {
        uv.y += sin(uv.x * frequency + offset) * amplitude;
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor)
    {
      outputColor = vec4(inputColor.rgb, inputColor.a);
    }
`;

export default class CustomEffect extends Effect {
  constructor({ frequency, amplitude, blendFunction = BlendFunction.NORMAL }) {
    super("DrunkEffect", fragmentShader, {
      blendFunction,
      uniforms: new Map([
        ["frequency", new Uniform(frequency)],
        ["amplitude", new Uniform(amplitude)],
        ["offset", new Uniform(0)]
      ])
    });
  }

  update(renderer, inputBuffer, deltaTime) {
    this.uniforms.get("offset").value += deltaTime;
  }
}
