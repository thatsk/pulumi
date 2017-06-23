// Copyright 2016-2017, Pulumi Corporation
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*tslint:disable:no-require-imports*/

import * as github from "./github";

export let slackToken = "<must provide a token>";
declare let require: any;

// On creation of a new issue, post to our Slack channel.
github.webhooks.onIssueOpened((e, callback) => {
    let slack = require("@slack/client");
    let client = new slack.WebClient(slackToken);
    let message = "New issue " + e.issue.title + " (#" + e.issue.number +") by "+ e.issue.user + ": " + e.issue.url;
    client.chat.postMessage("#issues", message, callback);
});
