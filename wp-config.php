<?php


/** 
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'omendb71018');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'omen2240');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', 'oS1MuQ4g');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', 'n3io5EPwP(J@WV(bUtIX?R;cv$wPCQJP>!q_pq.>EGn|?UfY9~(|VI?FCT1o+P.e');
define('SECURE_AUTH_KEY', '!<x`e-eo0A&y*#WE+>|!>,~FhzHPl9`79aqrg>?2LYNShp*F&:xl!U&60N*Tz~Ek');
define('LOGGED_IN_KEY', 'x$m]dc7d!{|C[=iLI_pRR;#Pp[^p%5bfxXzig@pN6fdu4Y$ybH1Ghp`gz)9rf@z~');
define('NONCE_KEY', 'pVQr|LWQ.[AJsxMBEt5C]4,-sPydiw9~Ew,k_#Q@D%oB*EEzP ^2L>lST7 zZI-b');
define('AUTH_SALT', '-SMp&!x~ BIm,=>6^*Qn]NnKc!6UV#sH}zz,H6:~~1)QBL&KPppQ-]/tE;Cn1k9]');
define('SECURE_AUTH_SALT', 'c!}jW0[qgyyvt.5&*@OM}9DeeUehfBa-+x]E}SAq. mV`/gMV@+{wOf0++BdGJ(t');
define('LOGGED_IN_SALT', '!BF+@YxbmYZ:ns6u]we~&?,k@p_pQ$ijbu};kynM?,~<2*cpZn2VWi7*Tj~.^jEG');
define('NONCE_SALT', '^Wv<|`zvdSPB h4VFezGe|.;[:BC.J4SW+g^$I&<g3^Q:`#O^j5UB2SOIGtK-l+*');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'wo_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', true);

/* ¡Eso es todo, deja de editar! Feliz blogging */

// log de errores de php
@ini_set('log_errors','On'); // habilitar o deshabilitar el registro de errores php (utiliza 'On' u 'Off')
@ini_set('display_errors','Off'); // activar o desactivar la exhibición pública de los errores (utiliza 'On' u 'Off')
@ini_set('error_log','/home/pruebasw/tmp/php-errors.log'); // ruta del archivo de log del servidor con permisos de escritura

/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

