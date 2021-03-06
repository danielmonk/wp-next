<?php

if (!class_exists('GFForms')) {
    die();
}

class GF_Field_Option extends GF_Field
{
    public $type = 'option';

    function get_form_editor_field_settings()
    {
        return [
            'product_field_setting',
            'option_field_type_setting',
            'conditional_logic_field_setting',
            'prepopulate_field_setting',
            'label_setting',
            'admin_label_setting',
            'label_placement_setting',
            'default_value_setting',
            'placeholder_setting',
            'description_setting',
            'css_class_setting',
        ];
    }

    public function get_form_editor_field_title()
    {
        return esc_attr__('Option', 'gravityforms');
    }
}

GF_Fields::register(new GF_Field_Option());
