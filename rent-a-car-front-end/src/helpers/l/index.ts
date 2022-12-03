// import format from "string-template";
import format from 'string-template';
import texts from './texts.json';

type DotPrefix<T extends string> = T extends '' ? '' : `.${T}`;

type DotNestedKeys<T> = (
  T extends object
    ? {
        [K in Exclude<keyof T, symbol>]: `${K}${DotPrefix<
          DotNestedKeys<T[K]>
        >}`;
      }[Exclude<keyof T, symbol>]
    : ''
) extends infer D
  ? Extract<D, string>
  : never;

type TextsTypes = typeof texts;
type ComputedTextTypes = DotNestedKeys<TextsTypes>;

function l(input: string, params?: object): string;
function l(input: ComputedTextTypes, params?: object): string;

function l(input: any, params?: any) {
  const path = input.split('.', 2);

  try {
    let text = (texts as any)[path[0]];

    if (path[1]) {
      text = (text as any)[path[1]];
    }

    if (params) {
      text = format(text, params);
    }

    if (typeof text === 'string') {
      return text;
    }

    throw new Error(`Invalid value ${text?.toString()}`);
  } catch (error) {
    // This is a valid logging
    console.log(`l Error:`, { input, params }); // eslint-disable-line
    console.log(error); // eslint-disable-line
  }

  return path[path.length - 1] || 'MISSING_TEXT';
}

export default l;
