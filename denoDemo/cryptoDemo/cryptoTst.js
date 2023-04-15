import {
  crypto,
  toHashString
} from "https://deno.land/std@0.182.0/crypto/mod.ts";
import { assert } from "https://deno.land/std@0.182.0/testing/asserts.ts";

const a = await crypto.subtle.digest(
  "SHA-384",
  new TextEncoder().encode("hello world"),
);
console.log(a)

const b = await crypto.subtle.digest(
  "SHA-384",
  new TextEncoder().encode("hello world"),
);
const c = await crypto.subtle.digest(
  "SHA-384",
  new TextEncoder().encode("hello deno"),
);

assert(crypto.subtle.timingSafeEqual(a, b));
assert(!crypto.subtle.timingSafeEqual(a, c));


// This will delegate to the runtime's WebCrypto implementation.
console.log(
  new Uint8Array(
    await crypto.subtle.digest(
      "SHA-384",
      new TextEncoder().encode("hello world"),
    ),
  ),
);

// This will use a bundled Wasm/Rust implementation.
console.log(
  new Uint8Array(
    await crypto.subtle.digest(
      "BLAKE3",
      new TextEncoder().encode("hello world"),
    ),
  ),
);

const hash = await crypto.subtle.digest(
  "SHA-384",
  new TextEncoder().encode("You hear that Mr. Anderson?"),
);

// Hex encoding by default
console.log(toHashString(hash));

// Or with base64 encoding
console.log(toHashString(hash, "base64"));