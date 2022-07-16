## About
This application is reactjs static website hosted on AWS S3 using AWS CLI. This website helps in searching the post codes of United Kingdom using the AWS lambda api's 

## Steps involved : 
### npx create-react-app postcodeapp
### `cd postcodeapp`
### `npm run start`
### `npm run build`
Then made sure my aws profile is configured in my machine. profile named `developertwo`
Made the required code and UI changes, tested locally, validated the template files and the deployed the changes to AWS. 

### `aws cloudformation deploy --template-file template.yaml --stack-name postcodeuistack --profile developertwo`

Once the stack is deployed, you can verify using the below commands 

### `aws s3 ls --profile developertwo`
### `aws s3 ls s3://postcode-react-webapp --profile developertwo`
### `aws s3 cp build/ s3://postcode-react-webapp --recursive --profile developer`
 
 Open http://postcode-react-webapp.s3-website.us-east-1.amazonaws.com/ in browser to see the website running
    Note: this url is dependent on the S3 bucket name  

I have confiured build and deploy command into a single command `npm run deploy`
// made some code updates and executed the below command to deploy the latest change
### `npm run deploy`

To delete the changes made use the below commands 
### `aws s3 rm s3://postcode-react-webapp --recursive --profile developer`
### `aws cloudformation delete-stack --stack-name postcodeuistack --profile developertwo`

# How to apply new modification?
Make the code changes, save,test and run the below command
### `npm run deploy`
