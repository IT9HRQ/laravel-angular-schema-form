<!DOCTYPE html>
<html app="bard" lang="en" ng-app="app">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>{{ config('app.name', 'Laravel') }}</title>
<link href="/css/app.css" rel="stylesheet">
<script> window.Laravel = <?php echo json_encode([ 'csrfToken' => csrf_token() ]); ?> </script>
</head>
<body class="header-fixed">
<layout id="display"></layout>
<script src="/js/app.js"></script>
</body>
</html>