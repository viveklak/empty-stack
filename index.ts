import * as pulumi from "@pulumi/pulumi";

const cfg = new pulumi.Config();
const password = cfg.getSecret("dbPassword");
console.log("Empty stack!");

var p = undefined;
if (password != undefined) {
    p = pulumi.unsecret(password);
}

export const dbPassword = p;
