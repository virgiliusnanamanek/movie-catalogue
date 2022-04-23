import UrlParser from "../../routes/url-parser";
import TheMovieDbSource from "../../data/themoviedb-source";

const Details = {
    async render(){
        return `
        
        <h2>Detail Page</h2>
        
        `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const movies = TheMovieDbSource.detailMovie(url.id);
    }
}

export default Details;