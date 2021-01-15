# Angular 11 Universal, Apollo GraphQL, Authentication, Prisma
### Angular 11 Universal, Apollo GraphQL Client/Server, Social Auth, Prisma, Material UI, SCSS

Change the project name in the following files from my-project to your-project-name
angular.json, package.json

```
Change the project name in the following files from my-project to your-project-name  
angular.json, package.json
or in search find and replace
```
## Angular Cli notes
```
ng g c component-name
ng g m module-name
ng g c pages/home --module pages
```

## Prisma notes
```bash
yarn add -D @prisma/cli
yarn add @prisma/client

# Prisma schema to db
npx prisma init
npx prisma migrate dev --name init --preview-feature

# Generating prisma schema from db
npx prisma init
# setup db connection string in .env
npx prisma introspect

# Generating prisma client to custom location in schema.prisma
generator client {
  provider = "prisma-client-js"
  output   = "./to/custom/location"
}


prisma generate
```

## ng command notes
```
# Adding ionic ui only to angular
ng add @ionic/angular
```
