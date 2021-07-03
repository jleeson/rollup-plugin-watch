import { Plugin } from "rollup";

declare interface Options {
    dir: string,
    include?: string | string[],
    exclude?: string | string[]
}

export default function (options?: Options) : Plugin;