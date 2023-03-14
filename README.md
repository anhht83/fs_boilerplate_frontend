# Frontend
ReactJs Boilerplate Using NexJs/TypeScript

## Global Requisites
* node (^14.*)  
* yarn (^1.4)  
* typescript (^4.*)
* react (^16.*)
* redux (^4.*)
* formik (^2.*)  
* socket.io-client (^4.*)
* tailwindcss (^3.*)
* next (^13.*)

## Install, Configure & Run
Below mentioned are the steps to install, configure & run in your platform/distributions.

### Install
```bash
# Run command to clone the repo.
git clone https://github.com/anhht83/fs_boilerplate_frontend.git

# Goto the cloned project folder, run command
cd fs_boilerplate_client

# Run command to install packages dependencies.
yarn install

# [Optional] Setup husky with GIT, run command
yarn prepare
```

### Configure
Edit your `.env.xxx` files to config server connections
```bash
# API server
NEXT_PUBLIC_ROOT_API=http://localhost:3001/v1
# Socket server
NEXT_PUBLIC_SOCKET_API=http://localhost:3001
```
### Run
```bash
# Run development
yarn dev
 
# Run production
yarn build:start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Test, Storybook & Code format validation
```bash
# Run Storybook
yarn storybook

# Run test
yarn test

# Validate code
yarn lint

# Format code
yarn pretty
```

### Build code and deployment
```bash
# Build code to "dist" folder
yarn build

# Run production
yarn start
```

## Development

### App Structure
```bash
├── .storybook
│   ├── main.js
│   ├── preview.js
├── __stories__
│   ├── pages # write storybook for pages
├── __test__
│   ├── pages # write test for pages
├── public
├── src
│   ├── components
│   │   ├── {component}
│   │   │   ├── {Component}.mocks.ts # Fake data
│   │   │   ├── {Component}.module.css # style modular, use inside this component 
│   │   │   ├── {Component}.stories.tsx # write storybook for this component 
│   │   │   ├── {Component}.tsx # ReactJs component
│   │   ├── {component}
│   │   │   ├── {subComponent} 
│   │   │   │   ├── {SubComponent}{Component}.mocks.tsx # Fake data
│   │   │   │   ├── {SubComponent}{Component}.module.css # style modular, use inside this component 
│   │   │   │   ├── {SubComponent}{Component}.stories.tsx # write storybook for this component
│   │   │   │   ├── {SubComponent}{Component}.tsx # ReactJs component
│   │   ├── templates # developer usually clone (copy/paste) the template component to dev new component
│   │   │   ├── base 
│   │   │   │   ├── BaseTemplate.mocks.tsx # Fake data
│   │   │   │   ├── BaseTemplate.module.css # style modular, use inside this component 
│   │   │   │   ├── BaseTemplate.stories.tsx # define Storybook for this component 
│   │   │   │   ├── BaseTemplate.tsx # ReactJs component
│   ├── hooks
│   │   ├── AuthProvider.tsx 
│   │   ├── BidProvider.tsx
│   │   ├── SocketProvider.tsx # connect to socket.io server
│   │   ├── use{Hook}.tsx # use customize hook only
│   │   ├── {Hook}Context.tsx # common context
│   │   ├── {Hook}Provider.tsx  # use for small feature, which can compile Provider, Context, Hook, Interface should in one file
│   │   ├── {hook}.d.tsx # common define
│   │   ├── {sub} # can group files of a big feature in one folder 
│   │   │   ├── use{Sub}.tsx # customize hook
│   │   │   ├── {Sub}Context.tsx # define context
│   │   │   ├── {Sub}Provider.tsx # Provider component
│   │   │   ├── {sub}.d.tsx # define type, interface
│   ├── page 
│   │   ├── _app.tsx
│   │   ├── _globals.css # import global style (include tailwind, ...)
│   │   ├── page.d.ts # define new type NextPageWithLayout, aka an extra of NextPage. To be used to implement Layout 
│   ├── stores # redux, saga, selector, state management
│   │   ├── {store}
│   │   │   ├── actions.ts # define action (type, payload)
│   │   │   ├── constants.ts # contains variable
│   │   │   ├── reducer.ts # map reducer
│   │   │   ├── sagas.ts # map saga, request API
│   │   │   ├── selectors.ts # reselect
│   │   │   ├── types.ts # define type/interface
│   │   ├── index.ts # mount store (reducer, saga, middleware)
│   │   ├── rootReducer.ts # combine reducers
│   │   ├── rootSaga.ts # combine sagas
│   │   ├── types.ts # common types
│   ├── utils
│   │   ├── helpers.ts
│   │   ├── request.ts # re-define axios instance
│   │   ├── storage.ts # work with localStorage/cookie/...
├── .env.local
├── .env.{NODE_ENV} # follow Next.Js structure
├── .eslint* # eslint configuration
├── .prettier* # prettier configuration
├── .git* # git configuration
├── next.config.js
├── next-env.d.ts
├── postcss.config.js
├── tailwind.config.js
├── package.json
├── README.md
└── tsconfig.json
```

### Learn More

To learn more about Next.js, Storybook.js, ... take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and configuration.
- [Storybook.js Documentation](https://storybook.js.org/docs) - learn about Storybook.js.

# Connect
**Anh Tuan Hoang** <anhht83@gmail.com>  https://github.com/anhht83