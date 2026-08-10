---
title: Introduction to Historian Multi API
description: Overview of the Historian Multi API capabilities
sidebar:
  order: 1
---
The Historian Multi API provides a single way to read and write time-series data across multiple connected historians.

Instead of integrating with each historian individually, applications send requests to the Historian Multi API using one consistent request format. The API communicates with the appropriate historian or historians, retrieves or writes the requested data, and returns the results in a standard response format.

<br>


<div style="border: 1px solid #ccc; padding: 1rem; border-radius: 6px;">

## Key Components Definitions:

To make a request to the Historian Multi API, you'll need the following:

- **Base URL** – The starting part of the API address. Your organisation will have its own base URL. 

- **Endpoint** – The API path for the operation you want to perform, in this case `/historian/multi`.

- **HTTP method** – The required method depends on the endpoint (for example, `GET` or `POST`). See the relevant read or write documentation for details.

- **Authentication** – A valid API key, passed using the `apikey` query parameter or the `X-Api-Key` HTTP header.

- **Request body (Payload)** – A JSON payload (where required) describing the data you want to retrieve or write.

</div>

<br>


## Making Your First Request
The following shows a request for retrieving a CURRENT_POINT.


#### 1. Full URL
```text
[POST|GET] <Base URL>/historian/multi

CURRENT_POINT Example:
POST https://demo.eigen.co/historian/multi
```
To find out your Base URL, contact your system admin.

<br>
<br>




#### 2. Authentication
The API Key can be passed in two ways: <br>
**1. Query Parameter** - The API key is added to the end of the URL, OR in Postman in the parameter tab.
```text
POST https://demo.eigen.co/historian/multi?apikey=API_EXAMPLE_KEY
```
![Using the `apikey` query parameter](~/assets/historian_multi_image_examples/postman-query-parameter.png)



**2. HTTP header** - Alternatively, pass the API key as the X-Api-Key HTTP Header.

![Using the `apikey` HTTP header](~/assets/historian_multi_image_examples/postman-header.png)

```text
In cURL:
-H 'X-Api-Key: API_EXAMPLE_KEY'
```

To find out your API Key credentials, contact your system admin.

<br>
<br>





#### 3. JSON Payload
Majority of requests will be ran as a POST request and provide a JSON payload as below. Each request follows a similar pattern:



```json
{
  "now": "2024-02-01T12:00:00Z", // optional `now` parameter, defaults to wall clock now
  "timeZone": "Europe/Oslo", // optional time zone parameter, defaults to Ingenuity time zone
  "requests": {
    "request1": { // label of first request, response will be returned under the same key
      "type": "REQUEST_TYPE", // dependent on type of request you are performing
      "tag": "historianName/tagName", // or a calculation expression
      "details": {} // additional parameters for given request
    }
    // more requests can be added here with unique labels
  }
}
```






_CURRENT_POINT Postman Request Example:_
```json
{
  "requests": {
    "label": {
      "type": "CURRENT_POINT",
      "tag": "Demo-influxdb/DEMO_02TI301.PV",
      "details": {}
    }
  }
}
```







_CURRENT_POINT Postman Result Example:_

```json
{
  "results": {
    "label": {
      "dataPoint": {
          "timestamp": "2026-08-04T12:29:25.651Z",
          "value": 35.0,
          "enumString": null,
          "message": null
      }
    }
  },
  "errors": {},
  "now": "2026-08-04T12:29:37.61687107Z"
}
```


_cURL CURRENT_POINT Request Example_

```bash
curl -X POST \
https://demo.eigen.co/historian/multi \
  -H 'Content-Type: application/json' \
  -H 'X-Api-Key: READONLYKEY' \
  --insecure \
  -d '
  {
    "requests": {
      "label": {
        "type": "CURRENT_POINT",
        "tag": "Demo-influxdb/DEMO_02TI301.PV",
        "details": {}
      }
    }
  }
'
```
