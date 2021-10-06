import { u128 } from "near-sdk-as";


export const ONE_NEAR = u128.from("1000000000000000000000000");


export function convertToNEAR(amount: number): string {
 return u128.div(u128.fromF64(amount), ONE_NEAR).toString();
}

 export function convertToYocto(amount: number): u128 {
  return u128.mul(ONE_NEAR, u128.from(amount))
}

