<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'local');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define(
    'AUTH_KEY',
    'uBJ1sbqIf+SZuPebgczSxRb2Xl0uYos2QXInnqcPhfAqmQC+0emPTcQ3uz1aalnsEQcyki9OoGp2YfL4Z66b/w=='
);
define(
    'SECURE_AUTH_KEY',
    'RWPy47hJoRotKSc8WImJ+owHWVzUt7rXGDI9fFupnbfsr8glkVGBIXevYqTcTSJuQvpIrmsBPJdAb5tkfeAk7w=='
);
define(
    'LOGGED_IN_KEY',
    'eulnhvtr8dgn5x6EY3apBG13iTUjws98nwbCY54pVke0p+ulhsIou/6wvc5Tldus20eG2ReR9c+ydBmH8m+VJA=='
);
define(
    'NONCE_KEY',
    'DTxaY37zGSYRM+0yAMjfEyl4aEyimEZL0a90ymYJqqw2w5n/8e3wUpbwqOjWKfOptDp165Y+BnbtUh2IEX09vg=='
);
define(
    'AUTH_SALT',
    'pFDJ+YaDYnV89U/6CqaAe5uoTU+dfrmT5F42AmPQHoZuOg8y24LHq/Xswofo1uQ3m+7LjeHv6XCJDvOtVRiqpw=='
);
define(
    'SECURE_AUTH_SALT',
    'Yht9v/g0Zqbn7wbXK9afnbKeITBF1e6dZXSJJFDHxP/VDy8PCHN3+aU41CPEwWw99WOu2/TMRyPLSX9NWW/ZbA=='
);
define(
    'LOGGED_IN_SALT',
    'YuVeCilteuULzPDecJ25Xn37jwmcqVI9uGabvzcIzpvzh+DzE3ne8OTfj3qHd9TUAARUUYjbMqL1b6nXJzRJug=='
);
define(
    'NONCE_SALT',
    'Re2NA+tP5vpQzgXPJzCqcmLVUpUL7oHFOTJcWkogLW7LVksF2sEbqe1foRGQcFsA9X3k95pcAG2P/PJ5hzmHYQ=='
);

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__) . '/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
