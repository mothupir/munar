import { KeylessAccount } from "@aptos-labs/ts-sdk";

export default (encoded: string): KeylessAccount => JSON.parse(
    encoded, (_, e) => {
        if (e && e.__type === "bigint") return BigInt(e.value);
        if (e && e.__type === "Uint8Array") return new Uint8Array(e.value);
        if (e && e.__type === "KeylessAccount") return KeylessAccount.fromBytes(e.data);
        return e;
    }
)