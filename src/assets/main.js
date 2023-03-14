//Para obtener canciones de un artista
const API = 'https://spotify23.p.rapidapi.com/artist_singles/?id=12wTrvRwxmsbUxkLffkPfv&offset=0&limit=20';
//const API = 'https://spotify23.p.rapidapi.com/artist_singles/?id=7jy3rLJdDQY21OgRLCZ9sD&offset=0&limit=20';
const content = null || document.getElementById('content');
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74b472ceaamsh750d6bc23058302p1ccefdjsnc0429432fc52',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};



async function fetchData(urlApi){
	const response = await fetch(urlApi, options);
	const data = await response.json();
	return data;  

}

//Función que se invoca a si misma
(async () => {
    try{
        const musics = await fetchData(API);
        let cero = 0;
        let dos = 2;
        
        //Creamos template para que cree un HTML por cada iteración de la respuesta
        let view = `
        ${musics.data.artist.discography.singles.items.map(music => `
                
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${music.releases.items[0].coverArt.sources[2].url}" alt="" class="w-full"/>
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
		  <span aria-hidden="true" class="absolute inset-0">
			</span>
			<b>${music.releases.items[0].name}</b><br>
			<a href="${music.releases.items[0].sharingInfo.shareUrl}" <span class="glyphicon glyphicon-play-circle" aria-hidden="true"></span></a>
			
			
            

          </h3>
        </div>
      </div>
      `).slice(0,20).join('')}
      `;
      
      content.innerHTML = view;
    
    } catch(error){
        console.log(error)
       
        
    }
})();
