// @ts-check

/**
 * Stringify an Error instance
 * @param err - The error to stringify
 */
function stringifyErrorValue(err: Error): string {
  return `${err.name.toUpperCase()}: ${err.message}
  ${err.stack || "(no stack trace information)"}`;
}

/**
 * Stringify a thrown value
 *
 * @param errorDescription
 * @param err
 * Some comment
 */
export function stringifyError(errorDescription: string, err: unknown): string {
  return `${errorDescription}\n${
    err instanceof Error
      ? stringifyErrorValue(err)
      : err
      ? // eslint-disable-next-line @typescript-eslint/restrict-plus-operands, @typescript-eslint/no-base-to-string
        "" + err
      : "(missing error information)"
  }`;
}
