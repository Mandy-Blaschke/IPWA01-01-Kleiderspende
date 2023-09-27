export function formatiereDatum(jsonDate) {
    const datum = new Date(jsonDate);

    const tag = String(datum.getDate()).padStart(2, '0');
    const monat = String(datum.getMonth() + 1).padStart(2, '0');
    const jahr = datum.getFullYear();

    return `${tag}.${monat}.${jahr}`;
};

export function formatiereUhrzeit(jsonDate) {
    const datum = new Date(jsonDate);

    const stunden = String(datum.getHours()).padStart(2, '0');
    const minuten = String(datum.getMinutes()).padStart(2, '0');

    return `${stunden}:${minuten}`;
};