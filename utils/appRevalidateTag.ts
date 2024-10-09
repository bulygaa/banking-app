'use server';
import { revalidateTag } from 'next/cache';

export const appRevalidateTag = async (tag: string | string[]) => {
	const tags = Array.isArray(tag) ? tag : [tag];
	tags.forEach((tag) => revalidateTag(tag));
};
