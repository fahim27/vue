@extends('backend.layouts.app')
@section('page_title')
    {{ 'Admin || Dashboard' }}
@endsection
@section('content')
    <!-- page content -->
        <div class="right_col" role="main">
         <router-view></router-view>
        </div>
</body>
@endsection


