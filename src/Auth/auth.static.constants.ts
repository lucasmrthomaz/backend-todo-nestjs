export const jwtConstants = {
  /*
    !! IMPORTANT !!
    1. Use a complex secret to create a secure encrypted JWT token.
    2. Ensure that you keep this value secure and never reveal it publicly (on local, add files in .gitignore when necessary).
    3. In this application, we're storing the secret in key ENVIRONMENT for local-dev purpose.
    4. In production environment, ensure that values are in vault like AWS Secrets Manager | HashiCorp Vault .
    */
  secret: process.env.JWTSecret || 'ABCDEF123456',
};
