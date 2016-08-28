<?php
/**
 * The header for our theme.
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sfp
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<meta name="language" content="de" /> 
<meta name="author" content="bludesign.pl" /> 
<meta name="publisher" content="Agnieszka Gorz - www.bludesign.pl" /> 
<meta name="robots" content="index,follow" /> 
<meta name="googlebot" content="index,follow" />
<meta name="coverage" content="worldwide" /> 
<meta name="rating" content="general" /> 
<meta name="revisit-after" content="2 days" /> 
<?php wp_head(); ?>
 <!--[if lt IE 9]>
  <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
  <![endif]-->
<style>
		/* latin */
 @font-face {
   font-family: 'Oswald';
   font-style: normal;
   font-weight: 300;
   src: local('Oswald Light'), local('Oswald-Light'), url(https://fonts.gstatic.com/s/oswald/v10/HqHm7BVC_nzzTui2lzQTDVtXRa8TVwTICgirnJhmVJw.woff2) format('woff2');
   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
 }
  @font-face {
   font-family: 'Oswald';
   font-style: normal;
   font-weight: 400;
   src: local('Oswald Regular'), local('Oswald-Regular'), url(https://fonts.gstatic.com/s/oswald/v10/pEobIV_lL25TKBpqVI_a2w.woff2) format('woff2');
   unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000;
 }
</style>
</head>
<body <?php body_class(); ?>>
<div id="page" class="site">
		<a class="skip-link sr-only" href="#content"><?php esc_html_e( 'Skip to content', 'sfp' ); ?></a>
		<header id="masthead" class="site-header">
			<nav id="site-navigation" class="main-navigation navbar navbar-default">
				<div class="container-fluid">
				  <div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					  <span class="sr-only">Toggle navigation</span>
					  MENU
					</button>
					<a class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>"><img class="img-responsive" src="<?php echo get_template_directory_uri(); ?>/dist/img/logo.png" alt="Logo image sfp"></a>
				  </div>
				  <div id="navbar" class="navbar-collapse collapse ">
					<?php 
						
					  wp_nav_menu( array(
							'menu'              => 'primary',
							'theme_location'    => 'primary',
							'depth'             => 2,
							'container'         => false,
							'menu_class'        => 'nav navbar-nav navbar-right ',
							'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
							'walker'            => new wp_bootstrap_navwalker())
						);
					  ?>
				  </div><!--/.nav-collapse -->
				</div><!--/.container-fluid -->
			</nav><!-- #site-navigation -->
		</header><!-- #masthead -->
	<div id="content" class="site-content">
