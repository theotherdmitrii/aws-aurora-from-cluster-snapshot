import * as aws from "@pulumi/aws";
import {ec2, rds} from "@pulumi/aws";


const EGRESS_ALL = {};

const azs = aws.getAvailabilityZones({
    state: "available"
});

const vpc = new ec2.Vpc("aurora-vpc", {
    cidrBlock: "10.0.0.0/16"
});

const vpcId = vpc.id;

const auroraSG = new ec2.SecurityGroup("aurora-sg", {
    description: "",
    ingress: [
        //    No ingress
    ],
    vpcId
});

const azIds = azs.zoneIds.slice(0, 2);

const auroraSubnets = azIds.map((azId, index) => new ec2.Subnet(`${vpcId}-private-${index}`, {
    availabilityZoneId: azId,
    cidrBlock: "10.0.0.0/24",
    vpcId: vpcId
}));

const auroraSubnetGroup = new rds.SubnetGroup("aurora-subnet-group", {
    subnetIds: auroraSubnets.map(it => it.id)
});

export {
    vpc, auroraSubnetGroup
};