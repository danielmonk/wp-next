<?php

class USIN_Gravity_Forms_Multioption_Meta_Loader extends USIN_Multioption_Field_Loader{


	protected function value_to_array($value){
		//if it is serialized, return the unserialized value
		return explode(',', $value);
	}

}