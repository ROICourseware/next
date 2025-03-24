# CICD

> **Note** This demo needs to be prepared in advance. The steps for doing so are listed  after the steps for the demo

## Steps for the Demo

### Examine the following 

1. Configuration for standalone in `next.config.ts`
1. Unit tests added for:
    - `app/components/utilities/pagination`
    - `app/(feature)/about`
    - `app/lib/actions/reviews/actions.ts`
        - See Apppendix A for more on unit testing
1. `--run` added to test script in `package.json` to force exit when done and allow build to continue
1. `CloudBuild.yaml` configuration for CICD in Google Cloud Run/Cloud Build
    1. The first two steps for unit testing were added manually
    1. Note the build `arg` for `API_URL`. This becomes an environment variable duirng the build. It is needed to support the use of `unstable_cache`/ISR on the home page.
1. `Dockerfile`
1. `.gitignore` 
    > **Note** The .env files are NOT part of the online repo used for CICD

## Steps for setting up the demo

1. Copy this folder outside of the git hierarchy
1. Initialize it as a new git repository
1. Create a github repository,  set it as the remote and push the code

1. Create/use a Google cloud project. Enable:
    - Cloud Build
    - Artifact Registry
    - Secret Manager
1. Create a new ServiceAccount with Secret Manager Secret Accessor permissions
1. Create a Cloud Run service 
    1. Use hello world container for inital deploy
    1. Add the following environment variables
        1. NEXT_PUBLIC_STORE_KEY=favorites
        1. NEXT_PUBLIC_SCHEMA_KEY=nlbr
        1. NEXT_PUBLIC_PAGE_SIZE=6
        1. API_URL=https://api-748767445624.us-central1.run.app/api/bookreactions/
        1. AUTH_TRUST_HOST=true
1. Set the service to run under the ServiceAccount you created
1. Deploy the service and copy the URL of the new service.
1. Edit and Deploy a new revision and create another envionment variable
    1.  NEXTAUTH_URL=[insert URL of your service]	
1. Create a new OAuth application on github
    1. Add the URL of the new service as the Homepage URL
    1. Add the URL of the new service + /api/auth/callback/github as the Authorization callback URL
    1. Create and copy a new secret.
1.  Create 4 secrets using Google Cloud Secret Manager
    1. AUTH_GITHUB_SECRET paste the copied secret
    1. AUTH_GITHUB_ID copy and paste the ID from the OAuth app
    1. API_SECRET_KEY from .env
    1. AUTH_SECRET	generate a new one using <code>openssl rand -base64 32</code> 
1. Return to the Cloud Run service, edit and deploy a new revision and add references to the four secrets 
1. Once deployed, Click Create Continuous Deployment
    1. follow the wizard. **WARNING!** IT WILL NOT WORK INITIALLY
        - It fails because Next needs the address of the backend API during build and this has not been provided
1. After the failed deployment, edit the continuous deployment and choose to edit the yaml file.
    1. Delete the first step from the file - leave the file open, do not save yet.
    1. Open CloudBuild.yaml in the root folder of this demo.
    1. Copy the first three steps and paste them as into the online yaml immediately after the opening 'steps' line.
    1. Save the file

At this point, you should have a working CICD pipeline. You can trigger it by pushing code to your repo, or manually inside Cloud Build > triggers


