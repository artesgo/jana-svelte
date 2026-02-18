/** @type {import('./$types').PageLoad} */
export function load(data: { params: { slug: string } }) {
	return { path: data.params.slug };
}
