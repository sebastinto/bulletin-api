# bulletin-api
A simple API for demonstrating fetching data with the [Bulletin](https://github.com/sebastinto/bulletin) library.
> Note: I'm using Vercel's [Hobbyist Tier](https://vercel.com/pricing) so please be respectful of the limitations this comes with, thanks!

## Endpoints
Endpoint for demo bulletin in JSON format can be found here: https://bulletin-api.vercel.app/api/data

API status endpoint: https://bulletin-api.vercel.app/api/status

## JSON
<details> 
    <summary>Click to see JSON sample</summary>

```JSON
[
   {
      "time":1652229320349,
      "label":"1.0.0-RC2",
      "changes":[
         {
            "changeType":"NEW",
            "summary":"Bulletin is easy!"
         },
         {
            "changeType":"DEFAULT",
            "summary":"Kotlin DSL FTW!"
         }
      ]
   },
   {
    "more..."
   }
]
```
</details> 

<details> 
    <summary>Click to see JSON schema</summary>

```JSON
{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": [
    {
      "type": "object",
      "properties": {
        "time": {
          "type": "integer"
        },
        "label": {
          "type": "string"
        },
        "changes": {
          "type": "array",
          "items": [
            {
              "type": "object",
              "properties": {
                "changeType": {
                  "type": "string"
                },
                "summary": {
                  "type": "string"
                }
              },
              "required": [
                "changeType",
                "summary"
              ]
            },
            {
              "type": "object",
              "properties": {
                "changeType": {
                  "type": "string"
                },
                "summary": {
                  "type": "string"
                }
              },
              "required": [
                "changeType",
                "summary"
              ]
            }
          ]
        }
      },
      "required": [
        "time",
        "label",
        "changes"
      ]
    }
  ]
}
```
</details> 
