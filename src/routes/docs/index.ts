import type { RequestHandler } from '@sveltejs/kit';
import { docs, getTitleFromContent } from '../../utils';

export const get: RequestHandler = async () => ({
	body: {
		docs: Object.fromEntries(
			Object.entries(docs).map(([slug, md]) => [slug, getTitleFromContent(md)])
		)
	}
});
