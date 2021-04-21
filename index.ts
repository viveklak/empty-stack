import * as pulumi from "@pulumi/pulumi";

const cfg = new pulumi.Config();
const password = cfg.requireSecret("dbPassword");
console.log("Empty stack!");

export const dbPassword = pulumi.unsecret(password);
export const moreSecret = cfg.requireSecret("moreSecret");
