({
	element_types: {
		image_description_list: {
			jump_id: '',
			image_form: '@@background_forms.square',
			$element_type_type: 'title',
			element_type: 'image_description_list',
			$image_description_list_hidden: true,
			image_description_list: true,
			image_on_left: false,
			dark: true,
			list: [
				{
					$image_type: 'image',
					image: '',
					headline: '',
					$description_type: 'textarea',
					description: '',
					$marked_doc_hidden: true,
					marked_description: '',
					$marked_description_hidden: true
				}
			]
		},
		image_description_split: {
			jump_id: '',
			element_type: 'image_description_split',
			$image_description_split_hidden: true,
			image_description_split: true,
			invert: true,
			dark: true,
			$image_type: 'image',
			image: '',
			headline: '',
			$description_type: 'textarea',
			description: '',
			$marked_doc_hidden: true,
			marked_description: '',
			$marked_description_hidden: true
		},
		image_full: {
			jump_id: '',
			$image_full_hidden: true,
			image_full: true,
			full_width: true,
			dark: true,
			$image_type: 'image',
			image: '',
			underline: '',
			$style_expander: true,
			style: {
				set_size_manual: false,
				max_width: '450px'
			}
		},
		description_full: {
			jump_id: '',
			$description_full_hidden: true,
			description_full: true,
			small: true,
			dark: true,
			headline: 'Ein Text zum Testen der Description',
			$description_type: 'textarea',
			description: '',
			$marked_doc_hidden: true,
			marked_description: '',
			$marked_description_hidden: true,
			$style_expander: true,
			style: {
				set_padding_manual: false,
				padding_top: '30px',
				padding_bottom: '30px'
			}
		},
		team_cards: {
			jump_id: '',
			image_form: '@@background_forms.square',
			$element_type_type: 'title',
			element_type: 'team_cards',
			$team_cards_hidden: true,
			team_cards: true,
			dark: true,
			list: [
				{
					$image_type: 'image',
					image: '',
					name: '',
					position: '',
					$description_type: 'textarea',
					description: '',
					marked_description: '',
					$marked_description_hidden: true,
					social: [
						{
							$icon_type: 'fa',
							icon: '',
							link: ''
						}
					]
				}
			]
		},
		fixed_background_picture: {
			$fixed_background_picture_hidden: true,
			fixed_background_picture: true,
			$image_type: 'image',
			image: ''
		},
		space: {
			$space_hidden: true,
			space: true,
			height: '100px'
		}
	}
})