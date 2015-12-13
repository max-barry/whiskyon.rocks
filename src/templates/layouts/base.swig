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

<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WTLWFS"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WTLWFS');</script>
<!-- End Google Tag Manager -->

{% include "src/templates/includes/header.swig" %}
{{>body}}
<span class="mobilewarning">Go get a laptop with a nice big screen, or turn your iPad sideways.<br><br>I haven't built this for mobile or tablet, and probably won't.<br><br><br><strong>Love, <a href="https://mxbry.com">Max</a></strong></span>
<script src="/js/app.js"></script>
</body>

</html>
