/**
 * 
 * @param {string} image 
 */
function getFullpath(image) {
    if (image.startsWith('http')) {
        return image;
    }

    return (import.meta.env.VITE_IMAGE_SERVER || '') + image;
}

/**
 * 
 * @param {string} lang 
 * @returns {{
 *  items: {id: number, title: string, description: number, year: number, tags: string[], image: string}[],
 *  title: string;
 *  subtitle: string;
 * }}
 */
export async function getData(lang="en") {
    const data = await (await fetch(`${import.meta.env.VITE_DATA_SERVER || ''}/data/${lang}.json`)).json();
    data.items = data.items.map((artwork) => ({
        ...artwork,
        image: getFullpath(artwork.image)
    }));

    return data
}