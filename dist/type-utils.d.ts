export type IsTypeEqual<A, B> = (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false;
export declare function typeAssert<T extends true>(): void;
//# sourceMappingURL=type-utils.d.ts.map