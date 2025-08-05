export type IsTypeEqual<A, B> = [A] extends [B] ? [B] extends [A] ? true : false : false;
export type IsTypeAssignable<A, B> = A extends B ? true : false;
export type Not<T extends boolean> = T extends true ? false : true;
export declare function typeAssert<T extends true>(): void;
//# sourceMappingURL=type-utils.d.ts.map