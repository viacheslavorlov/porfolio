import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [react(), markdoc(), process.env.MODE === 'dev' ? keystatic() : [], tailwind()],
	output: process.env.MODE === 'dev' ? 'hybrid' : 'static',
	// base: '/dist/'
});
