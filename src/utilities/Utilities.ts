export class Utilities {
  toSnakeCase = (str: string): string => {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
  };

  toCamelCase = (str: string): string => {
    return str.replace(/([-_]\w)/g, (match) => match[1].toUpperCase());
  };

  toPascalCase = (str: string): string => {
    return str.replace(/(^|-|_)(\w)/g, (_, __, letter) => letter.toUpperCase());
  };

  copyToClipboard = async (text: string): Promise<void> => {
    await navigator.clipboard.writeText(text);
  };

  randomNumber = (x: number = 100): number => {
    return Math.floor(Math.random() * x) + 1;
  };
}
