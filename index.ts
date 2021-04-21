import * as pulumi from "@pulumi/pulumi";

const cfg = new pulumi.Config();
const password = cfg.getSecret("dbPassword");
console.log("Empty stack!");


if (password != undefined) {
    pulumi.unsecret(password).apply(p => console.log(`Password is ${p}`));
}
