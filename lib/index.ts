// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface S3WithAlertProps {
  // Define construct properties here
}

export class S3WithAlert extends Construct {

  constructor(scope: Construct, id: string, props: S3WithAlertProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'S3WithAlertQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
