<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function show(User $user)
    {
        return Inertia::render('User/show', [
            'user' => $user
        ]);    }

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

    public function edit()
    {
        return Inertia::render('User/edit');
    }

    public function update(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'max:50'],
            'age' => [],
            'university' => [],
            'one_word' => [],
        ]);

        $user = Auth::user();
        $user->fill($validated)->save();
        return redirect('/users/' . $user->id);
    }
}
