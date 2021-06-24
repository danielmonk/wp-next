<?php
/**
 * template name: Networking Map Page
 * 
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header();

$container = get_theme_mod( 'understrap_container_type' ); ?>
<div class="wrapper" id="page-wrapper">
	<?php get_template_part('partials/networking-map'); ?>

	<div class="container" id="content" tabindex="-1">
		<main class="site-main" id="main">
			<?php /*while ( have_posts() ) { ?>
				<?php the_post(); ?>
                <h1><?php the_title(); ?></h1>
				<?php the_content();  ?>
			<?php } */?>
		</main><!-- #main -->
	</div><!-- #content -->
</div><!-- #page-wrapper -->

<?php
get_footer();
