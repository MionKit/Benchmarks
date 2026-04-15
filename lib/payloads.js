"use strict";

function generateSampleUser(isMion = false) {
  const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const userJson = `{"id":${id},"username":"john_smith","email":"john.smith@example.com","profile":{"firstName":"John","lastName":"Smith","displayName":"John S.","bio":"Software developer and tech enthusiast","avatarUrl":"https://example.com/avatars/john.jpg","dateOfBirth":"1990-05-15T00:00:00.000Z"},"role":"user","status":"active","address":{"street":"123 Main Street","city":"San Francisco","state":"CA","zipCode":"94102","country":"USA"},"paymentMethods":[{"type":"credit_card","lastFourDigits":"4242","expiryMonth":12,"expiryYear":2025,"brand":"visa"},{"type":"paypal","email":"john.paypal@example.com"}],"preferences":{"theme":"dark","language":"en-US","timezone":"America/Los_Angeles","notifications":{"email":true,"sms":false,"push":true,"frequency":"daily"}},"createdAt":"2020-01-15T10:30:00.000Z","updatedAt":"2024-12-17T02:24:00.000Z","lastLoginAt":"2024-12-16T18:45:00.000Z","tags":["premium","early-adopter","verified"]}`;
  return isMion ? `[${userJson}]` : userJson;
}

function generateSimpleUser(isMion = false) {
  const id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  const userJson = `{"id":${id},"name":"John","surname":"Doe","lastUpdate":"2024-01-15T10:30:00.000Z"}`;
  return isMion ? `[${userJson}]` : userJson;
}

module.exports = {
  generateSampleUser,
  generateSimpleUser,
};
