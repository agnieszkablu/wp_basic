<?php
/**
 * The sidebar containing the main widget area.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package sfp
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="secondary" class="widget-area" role="complementary">
	<?php
//		if (is_page('unternehmen')){
//			wp_nav_menu(array('menu'=>'second'));
//		} elseif (is_tree(6)) {
//			wp_nav_menu(array('menu'=>'second'));
//		} 
	?>
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside><!-- #secondary -->
