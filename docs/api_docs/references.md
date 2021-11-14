---
slug: intro
title: API References
sidebar_label: References
---

import Router from "@components/custom/Router";

Simple little cheat sheet for our API Usage

---

## GET User Reviews


<Router type="GET" path="/rev/:botID/:userID" />
• `https://api.reviewbots.xyz/rev/:botID/:userID`

Fetch a specific users review from the specified bot.

###### Flags 
| Field     | Type        | Description                                                                                         |
| --------- | ----------- | --------------------------------------------------------------------------------------------------- |
| userID    | `String`    | Discord Client ID for the Fetched User.                                                                 |
| botID     | `String`    | Discord ID for the Fetched User.                                                                    |
| content   | `Boolean`   | Message/Content for the Review.                                                                     |
| likes     | `Array`     | Array of Users who liked the Review.                                                                   |
| dislikes  | `Array`     | Areay of Users who Dislike the Review.                                                        |
| rating    | `Number`    | Rating for the Review (1 - 5 Stars).                                                        |
| reports   | `Array`     | Array of Users who Reported the Review.                                                     |
| replies   | `Map`       | Map of Replies to the Review.                                                     |
| date      | `Number`    | Date that the Review was Posted.                                                     |
