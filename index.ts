import * as pulumi from "@pulumi/pulumi";

console.log("Empty stack!");

const cfg = new pulumi.Config("aws");
export const region = cfg.require("region");
export const notSoSecret = pulumi.output("safe");
export const secretVal = pulumi.secret("newSecret");

await new Promise(resolve => setTimeout(resolve, 60000));