/** Quote CSV and neutralise spreadsheet formulas in untrusted registration fields. */
export function csvCell(value: string | null) {
  const text = value ?? "";
  const safe = /^[\s\u0000-\u001f]*[=+@-]/u.test(text) || /^[\t\r\n]/u.test(text)
    ? `'${text}` : text;
  return `"${safe.replaceAll('"', '""')}"`;
}

export function isAuthorised(request: Request, adminKey: string) {
  return !!adminKey && request.headers.get("authorization") === `Bearer ${adminKey}`;
}
