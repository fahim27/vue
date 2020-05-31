<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="{{asset('backend/images/favicon.ico')}}" type="image/ico" />
    <title>@yield('page_title')</title>
<!--
========================================================
//=============ALL CSS LINKING || INCLUDING===========//
========================================================
-->
@include('backend.partials.css')

</head>
<body class="nav-md">

    <div class="container body" id="app">

        <router-view></router-view>

    </div>

<!--
========================================================
//============ALL JS LINKING || INCLUDING=============//
========================================================
 -->
    <script src="{{asset('js/app.js')}}"></script>

    @include('backend.partials.js')

</body>
</html>
