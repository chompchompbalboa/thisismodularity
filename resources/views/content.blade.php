<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="shortcut icon" href="" type="image/x-icon"/>
    <link rel="stylesheet" type="text/css" href="/css/base.css">
    <link rel="stylesheet" type="text/css" href="/css/hovers.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400|Space+Mono:400,700" rel="stylesheet">
    <title>{{ $data['title'] }}</title>
  </head>
  <body>
    <section id="react-container"></section>
    <script src="{{ mix('js/react.js') }}"></script>
  </body>
</html>