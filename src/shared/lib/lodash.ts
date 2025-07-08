export function isEmpty(value: any): boolean {
  if (value == null) return true;

  if (typeof value === "string" || Array.isArray(value)) {
    return value.length === 0;
  }

  if (value instanceof Map || value instanceof Set) {
    return value.size === 0;
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0;
  }

  return false;
}

export function get<T = any, R = any>(
  obj: T,
  path: string | Array<string | number>,
  defaultValue?: R
): R {
  if (!obj) return defaultValue as R;

  const keys = Array.isArray(path)
    ? path
    : path.replace(/\[(\d+)]/g, ".$1").split(".");

  let result: any = obj;

  for (const key of keys) {
    if (result == null || typeof result !== "object" || !(key in result)) {
      return defaultValue as R;
    }
    result = result[key];
  }

  return result as R;
}
