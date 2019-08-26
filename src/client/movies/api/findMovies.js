export function upcoming(page){
    console.log("upcoming");
   return fetch(`/3/movie/upcoming?page=${page}&api_key=1f54bd990f1cdfb230adb312546d765d`)
    .then(res => res.json())
}