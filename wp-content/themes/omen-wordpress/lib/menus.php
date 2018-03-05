<?php

/*
 *
 * Custom Menus
 *
 */



add_filter( 'timber/context', 'add_to_context' );

function add_to_context( $context ) {
    // So here you are adding data to Timber's context object, i.e...
    $context['foo'] = 'I am some other typical value set in your functions.php file, unrelated to the menu';

    // Now, in similar fashion, you add a Timber Menu and send it along to the context.
    $context['redes'] = new \Timber\Menu( 'redes' );
    $context['idiomas'] = new \Timber\Menu( 'idiomas' );

    return $context;
}

// Register your menus here.
