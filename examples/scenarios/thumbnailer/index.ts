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

import * as aws from "@mu/aws";
import * as mu from "mu";
import {Thumbnailer} from "./thumb";

let images = new aws.s3.Bucket("images");
let thumbnails = new aws.s3.Bucket("thumbnails");
let thumbnailer = new Thumbnailer(images, thumbnails);

