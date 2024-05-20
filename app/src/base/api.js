const Dental = require('@amazingcat/node-cattr');
const keychain = require('../utils/keychain');

const api = new Dental();

api.tokenProvider = {

  get: keychain.getSavedToken,
  set: keychain.saveToken,

};

api.credentialsProvider = {

  get: keychain.getSavedCredentials,
  set: keychain.saveCredentials,

};

module.exports = api;
