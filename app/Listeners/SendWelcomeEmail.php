<?php

namespace App\Listeners;

use App\Events\UserRegistered;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;


class SendWelcomeEmail
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(UserRegistered $event)
    {
        //
        $data = array('name' => $event->user->name, 'email' => $event->user->email, 'body' => 'Bienvenido.');

        Mail::send('emails.mail', $data, function($message) use ($data) {
            $message->to($data['email'])
                ->subject('Bienvenido a INTA');
            $message->from('arielrnr1995@gmail.com');
        });
    }
}
