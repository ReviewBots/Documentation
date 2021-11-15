---
slug: get
title: getBotReviews()
sidebar_label: getBotReviews()
---

Used to Display a list of All Reviews for the Specified Bot.

---

import Router from "../../src/components/custom/Router";

## Endpoint
<Router type="GET" path="/rev/:botID/" />

---

## Constructor
```
ReviewBots()
```

or 

```
RB()
```

---

## Paramaters
###### Flags 
| Field     | Type        | Description                                                                                         |
| --------- | ----------- | --------------------------------------------------------------------------------------------------- |
| botID     | `String`    | Discord Client ID for the Bot to Fetch.                                                             |


---

## Examples

#### JavaScript Usage

```js:title=node-fetch
const fetch = require("node-fetch")
fetch(`https://api.reviewbots.xyz/rev/bot-id-here`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res => console.log(await res.json()));
```


