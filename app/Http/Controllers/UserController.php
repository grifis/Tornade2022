<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('User/index', [
            'users' => User::all()
        ]);
    }

    public function create()
    {
        return Inertia::render('User/create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
            'password' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email'],
        ]);

        User::create($validated);
        return redirect()->route('user.index');
    }
}
