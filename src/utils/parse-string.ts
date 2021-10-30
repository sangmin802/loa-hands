export function getOnlyText(string: string) {
  if (!string) return;
  const newStr = string.replace(/<BR>$/gi, "").replace(/<BR>/gi, "enter");
  const parsed = parseFromString(newStr).body.textContent as string;
  if (parsed.includes("enter")) {
    const split = parsed.split("enter");
    return split.map(res => {
      if (res !== "") return res;
      return null;
    });
  } else {
    return parsed;
  }
}

export function returnBody(data: string) {
  const body = parseFromString(data).getElementsByTagName("body")[0];
  return body;
}

export function parseFromString(string: string) {
  const parser = new DOMParser();
  return parser.parseFromString(string, "text/html");
}
