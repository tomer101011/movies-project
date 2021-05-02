import { server_path } from '../constants/server.js';

//search order map config
export const searchOrderMap = (count) => {
    return {
        recent: {
            url: `${server_path}/movies/recent/${count}`,
            searchTitle: 'Released recently',
            headLabel: <h2 className="panel">Released recently</h2>
        },
        favorites: {
            url: `${server_path}/movies/favorites/${count}`,
            headLabel: <h2 className="panel">Favorite movies</h2>
        },
        topRated: {
            url: `${server_path}/movies/topRated/${count}`,
            headLabel: <h2 className="panel">Top rated</h2>
        }
    }
}