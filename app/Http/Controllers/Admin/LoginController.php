<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use phpseclib\Crypt\Hash;

class LoginController extends Controller
{
    public  function index(Request $request){

        $this->validate($request, [
            'email' => 'required',
            'password' => 'required',
        ]);


        return response()->json([
            'token'=>$request->password,
            'name'=>"Fahim"
        ]);

    }
}
