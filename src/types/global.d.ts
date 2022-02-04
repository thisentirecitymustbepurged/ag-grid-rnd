import React from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string
  }

  type DomRef<Element = HTMLElement> = React.MutableRefObject<Element | null>
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tag: string]: React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
    }
  }

  interface Function {
    /**
     * For a given function, creates a bound function that has the same body as the original function.
     * The bound function will have the specified initial arguments.
     * @param args A list of arguments to be passed to the new function.
     */

    bindArgs<T>(this: T): T
    bindArgs<T, A0, A extends any[], R>(this: (this: T, arg0: A0, ...args: A) => R, arg0: A0): (...args: A) => R
    // prettier-ignore
    bindArgs<T, A0, A1, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, ...args: A) => R, arg0: A0, arg1: A1): (...args: A) => R;
    // prettier-ignore
    bindArgs<T, A0, A1, A2, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R, arg0: A0, arg1: A1, arg2: A2): (...args: A) => R;
    // prettier-ignore
    bindArgs<T, A0, A1, A2, A3, A extends any[], R>(this: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R, arg0: A0, arg1: A1, arg2: A2, arg3: A3): (...args: A) => R;
    bindArgs<T, AX, R>(this: (this: T, ...args: AX[]) => R, ...args: AX[]): (...args: AX[]) => R
  }

  /** Expands object types one level deep */
  type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never

  /** Expands object types recursively */
  type ExpandRecursively<T> = T extends object
    ? T extends infer O
      ? { [K in keyof O]: ExpandRecursively<O[K]> }
      : never
    : T

  type nil = null | undefined
}
