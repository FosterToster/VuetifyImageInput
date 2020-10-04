import cssPositionCenter from './css/PositionCenter';

export default function(h, {
	data,
	parent,
}) {
	let {
		animated,
		disabled,
		displayedImageHeight,
		displayedImageWidth,
		displayedTransformation,
		imageBackgroundColor,
		internalImageDataURL,
		onPanToTranslate,
		translatable,
	} = parent;
	let {
		key,
		style,
	} = data;
	return h(
		'div',
		{
			style: {
				...style,
				background: `#fff url('data:image/svg+xml;base64,${btoa('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 2" fill-opacity="0.2"><rect x="1" width="1" height="1"/><rect y="1" width="1" height="1"/></svg>')}') repeat center center / 16px 16px`,
				overflow: 'hidden',
			},
			key,
		},
		[
			h(
				'div',
				{
					style: {
						...cssPositionCenter,
					},
				},
				[h(
					'img',
					{
						style: {
							display: 'block',
							transform: displayedTransformation,
							position: 'relative',
							...(imageBackgroundColor ? {backgroundColor: imageBackgroundColor} : {}),
							...(animated ? {transition: `all ${1/2}s`} : {}),
						},
						attrs: {
							src: internalImageDataURL,
						},
						...(translatable
							? (disabled
								? {}
								: {directives: [
									{
										name: 'Claw',
										arg: 'pan',
										rawName: 'v-claw:pan',
										value: onPanToTranslate,
									},
									/*{
										name: 'Claw',
										arg: 'panStart',
										rawName: 'v-claw:panStart',
										value: lockDisplayedAnimations,
									},
									{
										name: 'Claw',
										arg: 'panEnd',
										rawName: 'v-claw:panEnd',
										value: unlockDisplayedAnimations,
									},*/
								]}
							)
							: {}
						),
					},
				)],
			),
			h(
				'div',
				{
					style: {
						...cssPositionCenter,
						boxShadow: '0 0 4000px 4000px rgba(0,0,0,0.5)',
						height: `${displayedImageHeight}px`,
						pointerEvents: 'none',
						width: `${displayedImageWidth}px`,
					},
				},
			),
		],
	);
}
