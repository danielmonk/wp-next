<?php
/**
 * template name: Event page
 * 
 * @package UnderStrap
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>

<?php // get_template_part('partials/slideout'); ?>


<?php if (is_user_logged_in()): ?>
	<div class="wrapper" id="page-wrapper">
		<!-- <div class="overlay"></div> -->
		<!-- <div id="example-progress-bar" class="progress progress-bar">
			<div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
			</div>
		</div> -->

		<div class="welcome">
			<div>
				<iframe id="vimeovid" src="https://player.vimeo.com/video/549264362?" width="640" height="360" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>	
				<a class="button" id="close-welcome" href="#">Close</a>
			</div>
		</div>
		
		
		<?php get_template_part('partials/event-map'); ?>

		<div class="container" id="content" tabindex="-1">
			<main class="site-main" id="main">
				<?php /*while ( have_posts() ) { ?>
					<?php the_post(); ?>
					<h1><?php the_title(); ?></h1>
					<?php the_content();  ?>
				<?php } */?>
			</main>
		</div>
	</div>

<?php else: ?>
	<div class="wrapper login-wrapper text-center" id="login-wrapper">
		<div class="container padding-full" id="content" tabindex="-1">
			<h3>You must be logged in to view this page</h3>
			<br>
			<?php wp_login_form(); ?>
		</div>
	</div>
<?php endif; ?>


<?php get_footer();