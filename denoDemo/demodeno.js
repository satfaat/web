import { serve } from 'https://deno.land/std@0.83.0/http/server.ts'

console.log('Output from deno');
alert('Output from deno');

let anagram = "node".split("").sort().join(""); // Output: deno

console.log(anagram)