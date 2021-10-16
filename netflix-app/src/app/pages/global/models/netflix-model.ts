export interface NetflixData {
    nav:Nav,
    hero: Hero;
    films: Films;
}

export interface Nav{
    logo: Img;
    item1:string;
    item2:string;
}

export interface Hero{
    title: string;
    img: Img[];
}

export interface Films{
    title: string;
    img: Img[];
}


export interface Img {
    src: string;
    alt: string;
}
  
  export interface Action {
    title: string;
    imgGallery: Img[];
  }
  