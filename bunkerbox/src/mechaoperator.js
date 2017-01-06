var client_mod = require('./client');
var snspoller = require('./snspoller');

var config = require('./config');
var secrets = require('./secrets');

var client = new client_mod.Client(
    config.config.noisyChannels,
    config.config.dbFileName,
    config.config.botPassword);

client.start(
    config.config.server,
    config.config.botName,
    {channels: config.config.channels,
     userName: config.config.userName,
     realName: config.config.realName}
);

var poller = snspoller.Poller(
    secrets.config.sqsUrl,
    secrets.config.awsAkey,
    secrets.config.awsSecret,
    config.config.eventHostname,
    client);
