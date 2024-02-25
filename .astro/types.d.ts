declare module 'astro:content' {
	interface Render {
		'.mdoc': Promise<{
			Content(props: Record<string, any>): import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"phrases": {
"1privet-kak-vashi-dela-dela.mdoc": {
	id: "1privet-kak-vashi-dela-dela.mdoc";
  slug: "1privet-kak-vashi-dela-dela";
  body: string;
  collection: "phrases";
  data: any
} & { render(): Render[".mdoc"] };
"nuzhen-bystryj-adaptivnyj-sajt.mdoc": {
	id: "nuzhen-bystryj-adaptivnyj-sajt.mdoc";
  slug: "nuzhen-bystryj-adaptivnyj-sajt";
  body: string;
  collection: "phrases";
  data: any
} & { render(): Render[".mdoc"] };
"vy-popali-po-adresu.mdoc": {
	id: "vy-popali-po-adresu.mdoc";
  slug: "vy-popali-po-adresu";
  body: string;
  collection: "phrases";
  data: any
} & { render(): Render[".mdoc"] };
};
"posts": {
"first-post.mdoc": {
	id: "first-post.mdoc";
  slug: "first-post";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".mdoc"] };
};
"technologies": {
"astro-js.mdoc": {
	id: "astro-js.mdoc";
  slug: "astro-js";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"css-3.mdoc": {
	id: "css-3.mdoc";
  slug: "css-3";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"html-5.mdoc": {
	id: "html-5.mdoc";
  slug: "html-5";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"java-script.mdoc": {
	id: "java-script.mdoc";
  slug: "java-script";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"keystatic-cms.mdoc": {
	id: "keystatic-cms.mdoc";
  slug: "keystatic-cms";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"next-js.mdoc": {
	id: "next-js.mdoc";
  slug: "next-js";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"react.mdoc": {
	id: "react.mdoc";
  slug: "react";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"redux.mdoc": {
	id: "redux.mdoc";
  slug: "redux";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"strapi-cms.mdoc": {
	id: "strapi-cms.mdoc";
  slug: "strapi-cms";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
"typescript.mdoc": {
	id: "typescript.mdoc";
  slug: "typescript";
  body: string;
  collection: "technologies";
  data: InferEntrySchema<"technologies">
} & { render(): Render[".mdoc"] };
};

	};

	type DataEntryMap = {
		"contacts-page": {
"index": {
	id: "index";
  collection: "contacts-page";
  data: any
};
};
"main-page": {
"index": {
	id: "index";
  collection: "main-page";
  data: any
};
};
"tech-page": {
"index": {
	id: "index";
  collection: "tech-page";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../src/content/config.js");
}
