import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as s3 from 'aws-cdk-lib/aws-s3'

interface MultistackProps extends cdk.StackProps {
  encryptBucket?: boolean
}

export class MultistackStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: MultistackProps) {
    super(scope, id, props);

    if(props && props.encryptBucket){
      new s3.Bucket(this, "MyGroovyBucket", {
        encryption: s3.BucketEncryption.KMS_MANAGED,
        removalPolicy: cdk.RemovalPolicy.DESTROY
      }); 

    }else {
      new s3.Bucket(this, "MyGroovyBucket", {
        removalPolicy: cdk.RemovalPolicy.DESTROY
      })
    }

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'MultistackQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
