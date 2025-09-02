import { KeylessAccount } from "@aptos-labs/ts-sdk";

export default (account: KeylessAccount): string => JSON.stringify(
    account, (_, e) => {
        if (typeof e === "bigint") return { __type: "bigint", value: e.toString() };
        if (e instanceof Uint8Array) return { __type: "Uint8Array", value: Array.from(e) };
        if (e instanceof KeylessAccount) return { __type: "KeylessAccount", data: e.bcsToBytes() };
        return e;
    }
)