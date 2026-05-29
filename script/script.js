Track: {
    album: Album; // album de la musique
    artists: Artist[]; // artistes de la musique
    duration_ms: number; // durée de la musique
    explicit: boolean; // musique explicite
    id: string; // id de la musique
    name: string; // nom de la musique
    popularity: number; // popularité de la musique
    preview_url: string; // url de la musique
    track_number: number; // numéro de la musique dans l'album
    type: string; // type d'objet (track)
}

Album: {
    album_type: string; // type d'album
    total_tracks: number; // nombre de musiques dans l'album
    id: string; // id de l'album
    images: Image[]; // images de l'album
    name: string; // nom de l'album
    release_date: string; // date de sortie de l'album
    release_date_precision: string; // précision de la date de sortie de l'album
    type: string; // type d'objet (album)
    genres: string[]; // genres de l'album
    popularity: number; // popularité de l'album
    artists: Artist[]; // artistes de l'album
    tracks: Track[]; // musiques de l'album
}

Artist: {
    followers: {
        total: number; // nombre de followers
    }; // followers de l'artiste
    genres: string[]; // genres de l'artiste
    id: string; // id de l'artiste
    images: Image[]; // images de l'artiste
    name: string; // nom de l'artiste
    popularity: number; // popularité de l'artiste
    type: string; // type d'objet (artist)
}

Image: {
    height: number; // hauteur de l'image
    url: string; // url de l'image
    width: number; // largeur de l'image
}