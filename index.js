class IndexController extends Controller {
    // called in `initState()`
    load() {
        this.data = {
            tabs: [
                {
                    "title": "home",
                    "id": "home",
                    "url": "https://allmanga.to/manga?cty=ALL"
                }, 
            ]
        };
    }

    // called in `dispose()`
    unload() {

    }
}

module.exports = IndexController;
