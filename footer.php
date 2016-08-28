<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sfp
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer container">
		<div class="row">
			<div class="col-xs-12 col-md-6 col-md-offset-3">
				<div class="row">
					<div class="site-info col-xs-6">
						<p>Copyright 2016 &copy; <a href="<?php echo esc_url( __( 'http://www.sfp.pl/', 'sfp.pl' ) ); ?>"><?php printf( esc_html__( 'sfp.pl', 'sfp.pl' ), 'sfp.pl' ); ?></a></p>
					</div><!-- .site-info -->
					<div class="site-design col-xs-6">
						<p>MADE with  <i class="fa fa-heart"></i> by <a href="<?php echo esc_url( __( 'http://bludesign.pl/', 'bludesign' ) ); ?>"><?php printf( esc_html__( 'bludesign.pl', 'bludesign' ), 'bludesign' ); ?></a> 2016</p>
					</div><!-- .site-design -->
				</div><!-- .row-->
			</div> <!-- .col-xs-12 col-md-offset-3-->
		</div><!-- .row-->
	</footer><!-- #colophon -->
</div><!-- #page -->
<?php wp_footer(); ?>
</body>
</html>
