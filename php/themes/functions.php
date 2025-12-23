<?php
function newpedia_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'newpedia_setup');

function newpedia_assets() {
    wp_enqueue_style('bootstrap',
        'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css'
    );
}
add_action('wp_enqueue_scripts', 'newpedia_assets');
