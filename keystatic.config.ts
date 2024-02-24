import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
	},
	collections: {
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'src/content/posts/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: 'src/assets/images/posts',
						publicPath: '../../assets/images/posts/',
					},
				}),
			},
		}),
		phrases: collection({
			label: 'Phrases',
			slugField: 'title',
			path: 'src/content/phrases/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				timeout: fields.number({ label: 'Timeout' }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
				}),
			},
		}),
		technologies: collection({
			label: 'Technologies',
			slugField: 'title',
			path: 'src/content/technologies/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				icon: fields.text({ label: 'Icon' }),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: 'src/assets/technologies/',
						publicPath: '../../assets/technologies/',
					},
				}),
			},
		}),
	},
	singletons: {
		main: singleton({
			label: 'MainPage',
			path: 'src/content/main-page/',
			schema: {
				title: fields.text({ label: 'Title' }),
				subTitle: fields.text({ label: 'Subtitle' }),
				icon: fields.text({ label: 'Icon' }),
				description: fields.text({label: 'Description'})
			},
		}),
		tech: singleton({
			label: 'Tech Page',
			path: 'src/content/tech-page/',
			schema: {
				title: fields.text({ label: 'Title' }),
				subTitle: fields.text({ label: 'Subtitle' }),
				icon: fields.text({ label: 'Icon' }),
				description: fields.text({label: 'Description'})
			},
		}),
	},
});
