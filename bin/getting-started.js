#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { GettingStartedStack } = require('../lib/getting-started-stack');

const app = new cdk.App();
new GettingStartedStack(app, 'GettingStartedStack');
