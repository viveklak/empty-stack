import * as pulumi from "@pulumi/pulumi";

const cfg = new pulumi.Config();
const password = cfg.requireSecret("dbPassword");
console.log("Empty stack!");

export const notSoSecret = pulumi.secret("safe");
export const secretVal = pulumi.secret("newSecret");
