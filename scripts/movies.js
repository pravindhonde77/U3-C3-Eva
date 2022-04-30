// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let movies_div=document.getElementById("searchResult")

    let id;

    async function searchMovies(){
    // https://www.omdbapi.com/?apikey=6a41ddca&s=om_shanti_om

    try{
        const search=document.getElementById("search").value

        const res= await fetch(`https://www.omdbapi.com/?apikey=6a41ddca&s=${search}`)

        const data=await res.json();
        console.log(data);
       
        const film=data.Search;  

        return film;
    }
    catch(err){
        console.log("err:",err);
    }
}

let movies=document.getElementById("movies")
function appendMovies(data){
    //optimization #2
    movies_div.innerHTML=null;

    data.forEach(function(el){
       
        // console.log(el);
        let div=document.createElement("div")
        let image=document.createElement("img")
        image.src=el.Poster;
        let p=document.createElement("p")

        p.innerText=el.Title;
        div.append(image,p)
        movies.append(div)

        // movies_div.append(p)
    })
}

async function main(){
    let data=await searchMovies();
    if(data===undefined){
        return false;
    }
    appendMovies(data) 
}


// Debouncing

function debounce(func,delay){
     
    if(id){
        clearTimeout(id)
    }

    id=setTimeout(function(){
        func();
    },delay);

}
  
