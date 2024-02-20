export const getImagen = async () => {
    try {
        const apiKey = '7GV8U0C8JlSg15IDzIX6NYLEqrSXHPtX123';
        const resp = await fetch(
            `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
    } catch (error) {
        return 'Img not found';
    }
}
getImagen();