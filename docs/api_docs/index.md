---
slug: intro
title: API Introduction
sidebar_label: Introduction
---

import Router from "../../src/components/custom/Router";

Review Bots uses a REST API for general operations such as sending and receiving `POST` and `GET` requests.

#### Base Url

[api.reviewbots.xyz](https://api.reviewbots.xyz)

---

#### User Review URL
<Router type="GET" path="/rev/:botID/:userID" />

---

#### All Reviews URL
<Router type="GET" path="/rev/:botID" />
