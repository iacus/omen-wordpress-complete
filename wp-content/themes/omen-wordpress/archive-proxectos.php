<?php
/**
 * The template for displaying Archive pages.
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * Methods for TimberHelper can be found in the /lib sub-directory
 *
 * @package  WordPress
 * @subpackage  Timber
 * @since   Timber 0.2
 */

$data = Timber::get_context();

$data['filtro_proxectos'] = Timber::get_terms('categoria_proxecto');
$data['posts'] = Timber::get_posts('post_type=proxectos');

$data['is_proxectos'] = 'true';

Timber::render( 'archive-proxectos.twig', $data);