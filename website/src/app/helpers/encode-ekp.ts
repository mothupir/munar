import { EphemeralKeyPair } from "@aptos-labs/ts-sdk";

export default (ekp: EphemeralKeyPair): string =>JSON.stringify(
    ekp, (_, e) => {
        if (typeof e === "bigint") return { __type: "bigint", value: e.toString() };
        if (e instanceof Uint8Array) return { __type: "Uint8Array", value: Array.from(e) };
        if (e instanceof EphemeralKeyPair) return { __type: "EphemeralKeyPair", data: e.bcsToBytes() };
        return e;
    }
);