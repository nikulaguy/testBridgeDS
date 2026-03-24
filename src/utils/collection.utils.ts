import {
	type DataEntryMap,
	getCollection,
	type InferEntrySchema,
} from "astro:content";

type EntrySchemaWithOrder = InferEntrySchema<keyof DataEntryMap> & {
	order: number;
};

export const getCollectionSortedByOrder = async <T extends keyof DataEntryMap>(
	collectionName: T,
) => {
	const collection = await getCollection(collectionName);

	if (!Object.hasOwn(collection[0].data, "order")) {
		return collection;
	}

	return collection.sort(
		(a, b) =>
			(a.data as EntrySchemaWithOrder).order -
			(b.data as EntrySchemaWithOrder).order,
	);
};
