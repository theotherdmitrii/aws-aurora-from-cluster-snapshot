import * as pulumi from '@pulumi/pulumi'

const config  = new pulumi.Config();

export const dbClusterSnapshotArn = config.require("dbClusterSnapshotArn");

export const dbClusterSNapshotCopyName = config.require("dbClusterSNapshotCopyName");