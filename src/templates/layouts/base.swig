<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>{{meta.title}}</title>
    <meta name="description" content="{{meta.description}}">
    <meta name="keywords" content="{{meta.keywords}}">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="/css/app.css">
    <link rel="stylesheet" href="/css/fonts.css">

    
    <script src="/js/modernizr.min.js"></script>
    

</head>

<body>
{% include "src/templates/includes/header.swig" %}
{{>body}}
<span class="mobilewarning">Go get a laptop with a nice big screen, or turn your iPad sideways.<br><br>I haven't built this for mobile or tablet, and probably won't.<br><br><br><strong>Love, <a href="https://mxbry.com">Max</a></strong></span>
<script src="/js/app.js"></script>
</body>

</html>
