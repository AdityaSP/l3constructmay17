import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface S3WithAlertProps {
  bucketName :string
}

export class S3WithAlert extends Construct {

  bucket :cdk.aws_s3.Bucket

  constructor(scope: Construct, id: string, props: S3WithAlertProps) {
    super(scope, id);
      const alertLamName = cdk.Fn.importValue("alter-lambda-name");
      const lam = cdk.aws_lambda.Function.fromFunctionName(
      this,
      "loadlambda",
      alertLamName
    );
         const mys3 = new cdk.aws_s3.Bucket(this, props.bucketName, {
           removalPolicy: cdk.RemovalPolicy.DESTROY,
           autoDeleteObjects: true
         });
         this.bucket=mys3
       mys3.addEventNotification(
         cdk.aws_s3.EventType.OBJECT_CREATED,
         new cdk.aws_s3_notifications.LambdaDestination(lam)
       );
       mys3.addEventNotification(
         cdk.aws_s3.EventType.OBJECT_REMOVED,
         new cdk.aws_s3_notifications.LambdaDestination(lam)
       );
  }
  getBucket(){
    return this.bucket
  }

}
