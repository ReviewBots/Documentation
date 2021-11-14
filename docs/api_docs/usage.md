---
slug: usage
title: API Usage
sidebar_label: Usage
---

---
title: API Usage
description: Common Examples of our API Usage.
---

If you prefer to interact with our raw API instead of using a Third Party Module
you can follow the usage guides and examples below which should be more then enough to 
get you started xD

---

## Javascript Usage

```js:title=GET
const fetch = require("node-fetch")
fetch(`https://api.reviewbots.xyz/rev/bot-id-here`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(async res => console.log(await res.json()));
```

---
