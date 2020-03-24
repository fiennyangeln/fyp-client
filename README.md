# FYP Client

This repository contains a site that demonstrate the flow of my Final Year Project research topic.

## Development

### Prerequisites

- Node version v8+
- [Yarn](https://www.npmjs.com/package/yarn)

### Building

First, fork this repository to another GitHub account (your account).
Then you can clone and install:

```
git clone https://github.com/<YOUR_ACCOUNT>/fyp-client.git
cd fyp-client
yarn
```

### Code Organization

- `src/`: source code
- `src/App.jsx`: top-level component
- `src/components`: generic components that can be used in any view (not view-specific)

### Tasks and Configuration

Building this project uses [Neutrino](https://github.com/mozilla-neutrino/neutrino-dev),
[neutrino-preset-mozilla-frontend-infra](https://github.com/mozilla-frontend-infra/neutrino-preset-mozilla-frontend-infra)

### Testing changes

Install npm dependencies and start it up:

- `yarn`
- `yarn start`

This will start a local development server on port 5000 (http://localhost:5000/fyp-client/). Note that the base url 
is '/fyp-client/'. This setting is used to deploy the site as Github Pages.
