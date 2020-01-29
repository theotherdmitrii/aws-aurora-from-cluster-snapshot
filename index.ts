import {auroraSubnetGroup, vpc} from "./src/network";

export const vpcArn = vpc.arn.apply(it => it);

export const auroraSubnetGroupArn = auroraSubnetGroup.arn.apply(it => it);
