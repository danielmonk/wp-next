<?php

class USIN_Edd_Earnings_Loader extends USIN_Period_Report_Loader {
	
	protected function load_data(){
		global $wpdb;

		$group_by = $this->get_period_group_by('orders.post_date');

		$query = $wpdb->prepare("SELECT SUM( totals.meta_value) AS $this->total_col, orders.post_date AS $this->label_col ".
			"FROM $wpdb->posts AS orders ".
			"INNER JOIN $wpdb->postmeta AS totals ON ( orders.ID = totals.post_id AND totals.meta_key = '_edd_payment_total' ) ".
			"WHERE orders.post_type = %s AND orders.post_status IN ('publish', 'revoked') AND orders.post_date >= %s AND orders.post_date <= %s GROUP BY $group_by",
			USIN_EDD::ORDER_POST_TYPE, $this->get_period_start(), $this->get_period_end());


		return $wpdb->get_results( $query );

	}
	
}