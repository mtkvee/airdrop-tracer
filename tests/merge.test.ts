import assert from "node:assert/strict";
import test from "node:test";
import { mergeCustomOptions } from "../app/legacy/merge";

test("mergeCustomOptions deduplicates synced options and keeps all unique values", () => {
  const merged = mergeCustomOptions(
    {
      airdropConnectType: [
        { value: "EVM", text: "EVM local" },
        { value: "gmail", text: "Gmail" },
      ],
    },
    {
      airdropConnectType: [
        { value: "evm", text: "EVM cloud" },
        { value: " sol ", text: "SOL" },
      ],
    }
  );

  assert.ok(merged.airdropConnectType);
  assert.equal(merged.airdropConnectType.length, 3);

  const values = merged.airdropConnectType.map((x) => x.value).sort();
  assert.deepEqual(values, ["evm", "gmail", "sol"]);
});
