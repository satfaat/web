import * as mod from "https://deno.land/std@0.182.0/yaml/mod.ts";


class Passenger {
  constructor(
    age,
    birthdate,
    citizenship,
    name,
    surname,
    gender,
    phone
  ) {
    this.age = age;
    this.birthdate = birthdate;
    this.citizenship = citizenship;
    this.name = name;
    this.surname = surname;
    this.gender = gender;
    this.phone = phone;
  }
};

let viktorPetrov = new Passenger(
  "adt",
  "1983-01-06",
  "UZ",
  "Viktor",
  "Petrov",
  "M",
  "+980652147502",
);

console.log(viktorPetrov)

let odj_to_json_demo = JSON.stringify(viktorPetrov, null, 4)
console.log(odj_to_json_demo)

let obj_to_yaml_demo = mod.stringify(viktorPetrov)
console.log(obj_to_yaml_demo)

const yamlStrDemo = `
foo: bar
baz:
  - qux
  - quux
`

const yaml_to_json_demo = mod.parse(yamlStrDemo);

console.log(yaml_to_json_demo);

const json_to_yaml_demo = mod.stringify({ foo: "bar", baz: ["qux", "quux"] });
console.log(json_to_yaml_demo);